import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token não enviado' });

  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token) return res.status(401).json({ message: 'Token inválido' });

  jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    req.userId = decoded.userId;
    next();
  });
};
