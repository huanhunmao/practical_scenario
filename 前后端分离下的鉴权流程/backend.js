const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const secretKey = 'your_secret_key';

// Middleware for parsing JSON body
app.use(bodyParser.json());

// Dummy user data 
const users = [
    { id: 1, username: 'user1', password: 'password1', role: 'user' },
    { id: 2, username: 'admin', password: 'adminpassword', role: 'admin' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Protected endpoint
app.get('/api/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected resource.' });
});

// Verify JWT token middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'No token provided' });
    jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
        req.user = decoded;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
