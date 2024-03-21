const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token.split(' ')[1], 'your-secret-key');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

app.use(express.json());
app.use(verifyToken);

// 受保护的资源端点
app.get('/protected', (req, res) => {
  res.send(`Welcome to App 1, User ID: ${req.user.userId}`);
});

app.listen(4001, () => {
  console.log('App 1 running on port 4001');
});
