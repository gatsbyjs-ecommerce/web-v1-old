import jwt from 'jsonwebtoken';
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
    { id: user._id, email: user.email },
    conf.get('jwtSecret'),
  );
  return `JWT ${jwtToken}`;
}
