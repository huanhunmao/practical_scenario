import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 将 账号 密码 推给 后端 并拿到 token  并使用 setToken 存储起来 
            const response = await axios.post('/login', { username, password });
            setToken(response.data.token);
        } catch (error) {
            console.error('Login error:', error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

// 从 本地存储拿到 token 去校验 如果不通过就去登录页
const ProtectedPage = ({ token }) => {
    if (!token) return <Redirect to="/login" />;
    return <h1>Protected Page</h1>;
};

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Route path="/login">
                <Login setToken={setToken} />
            </Route>
            <Route path="/protected">
                <ProtectedPage token={token} />
            </Route>
        </Router>
    );
};

export default App;
