const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(passport.initialize());

const users = [{ id: 1, username: 'admin', password: 'password' }];

passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return done(null, false, { message: 'Incorrect username or password' });
  }
  return done(null, user);
}));

// 登录端点，用于生成 JWT 令牌
// 这个地方 需要使用 postman  post 请求传递参数   username: 'admin', password: 'password' 
// 才能拿到 token 
// 拿着 这个 token 在不同的 app app.js 里请求
app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ userId: req.user.id }, 'your-secret-key');
  res.json({ token });
});

app.listen(3005, () => {
  console.log('IDP server running on port 3005');
});
