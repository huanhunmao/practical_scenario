const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end(
        '跨域请求已允许'
    )
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名的请求，也可以设置特定域名
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
    next();
})

const PORT = process.env.PORT || 3010
app.listen(PORT, (req, res) => {
    console.log(`服务器已启动，端口：${PORT}`);
})