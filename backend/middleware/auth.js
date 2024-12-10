import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({
      success: false,
      message: 'Not authorized, login again!',
    });
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.json({
      success: false,
      message: 'Not authorized, login again!',
    });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: 'Not authorized, login again!',
    });
  }
};

export default authMiddleware;
