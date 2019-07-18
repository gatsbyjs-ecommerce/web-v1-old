import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import conf from './config';

export const isAuthenticated = async req => {
  if (!req.headers.authorization) {
    return undefined;
  }

  const token = req.headers.authorization.substring(4);
  const data = await new Promise(resolve => {
    jwt.verify(token, conf.get('jwtSecret'), (err, decoded) => {
      if (err) {
        return resolve(null);
      }
      return resolve(decoded);
    });
  });

  return data;
};

export function generateToken(user) {
  const jwtToken = jwt.sign(
    { id: user.id || user.entryId, email: user.email },
    conf.get('jwtSecret'),
  );
  return `JWT ${jwtToken}`;
}

export const hashPassword = async password => {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = async (candidatePassword, password) => {
  const result = await bcrypt.compareSync(candidatePassword, password);
  return result;
};
