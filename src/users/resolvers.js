import { isEmpty, head } from 'lodash';
import randomstring from 'randomstring';

import { generateToken, hashPassword, comparePassword } from '../utils/auth';
import User from './database';
import mailer, { renderTemplate } from '../utils/mailer';
import config from '../utils/config';
import { getEntry, createEntry, getEntries } from '../utils/contentful';

export default {
  Query: {
    me: async (root, args, ctx) => {
      if (!ctx.user) {
        throw new Error('Not logged in');
      }

      const user = await getEntry(ctx.user.id);
      return user;
    },
  },
  Mutation: {
    register: async (root, args) => {
      const { email, password } = args.input;

      const users = await getEntries('user', {
        'fields.email[match]': email.toLowerCase(),
      });
      let user = head(users);

      if (user) {
        throw new Error('E-mail already registered.');
      }

      const hashedPassword = await hashPassword(password);
      user = await createEntry({ email, password: hashedPassword }, 'user');

      // send welcome email
      // const [html, subject] = await renderTemplate('welcome', {
      //   user,
      // });
      // const mailOptions = {
      //   to: `"Site User" <${user.email}>`,
      //   from: config.get('adminEmail'),
      //   subject,
      //   html,
      // };
      // await mailer.sendMail(mailOptions);

      const token = generateToken(user);
      return { user, jwt: token };
    },
    login: async (root, args) => {
      const { email, password } = args.input;
      const users = await getEntries('user', {
        'fields.email[match]': email.toLowerCase(),
      });
      const user = head(users);

      if (!user) {
        throw new Error('Invalid username or password.');
      }
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid username or password.');
      }

      const token = generateToken(user);
      return { user: { ...user, id: user.id || user.entryId }, jwt: token };
    },
    updateMe: async (root, { input }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not logged in');
      }

      const objUpdate = {};
      const objFind = { _id: ctx.user.id };

      // update user
      if (input.email) {
        objUpdate.email = input.email;
      }

      // if user obj not empty
      if (!isEmpty(objUpdate)) {
        await User.updateOne(objFind, objUpdate);
      }

      return User.findOne({ _id: ctx.user.id });
    },
    forgotPassword: async (root, { input }) => {
      const resetPasswordToken = randomstring.generate();
      const webAppUrl = config.get('webAppUrl');

      await User.updateOne({ email: input.email }, { resetPasswordToken });

      const [html, subject] = await renderTemplate('forgot-password', {
        resetPasswordLink: `${webAppUrl}/set-password/${resetPasswordToken}`,
      });
      const mailOptions = {
        to: `"Site User" <${input.email}>`,
        from: config.get('adminEmail'),
        subject,
        html,
      };
      await mailer.sendMail(mailOptions);

      return { success: true };
    },
    setNewPassword: async (root, { input }) => {
      const user = await User.findOne({ resetPasswordToken: input.token });

      if (!user) {
        throw new Error('Invalid password reset token provided.');
      }

      user.password = input.password;
      user.resetPasswordToken = null;
      await user.save();

      return { success: true };
    },
  },
};
