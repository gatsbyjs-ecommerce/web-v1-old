import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
      index: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      trim: true,
    },
    resetPasswordToken: { type: String },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'notActive', 'banned'],
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        delete ret.password;
      },
    },
  },
);

UserSchema.pre('save', async function (done) { // eslint-disable-line
  // only hash the password if it has been modified (or is new)
  if (this.isNew || this.isModified('password')) {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(this.password, salt);
    this.password = hash;
  }

  return done();
});

UserSchema.methods.comparePassword = async function (candidatePassword) { // eslint-disable-line
  const result = await bcrypt.compareSync(candidatePassword, this.password);
  return result;
};

export default mongoose.model('User', UserSchema);
