//  为了 适配缓存 后端需要做什么  以 express 为例
const express = require('express');
const app = express();

// 静态资源缓存配置，例如图片、样式表、脚本等
app.use('/static', express.static('public', {
  maxAge: '7d' // 设置静态资源的缓存有效期为7天
}));

// 路由示例，返回动态内容，使用协商缓存
app.get('/news', (req, res) => {
  // 设置协商缓存响应头，Last-Modified或ETag字段由框架自动生成
  res.set('Cache-Control', 'no-cache'); // 禁用强缓存
  res.send('This is the latest news content.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
