import { useState } from 'react';
import '../styles/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            
            await axios.post('http://localhost:5000/login', {
                email: username,
                password: password,
            }).then((res) => {
                if (res.data === 'Login Success') {
                    history('/home',{state:{id:username}});
                } else {
                    alert('Login Failed');
                }
            }).catch((err) => {
                console.log(err);
            });

        } catch (error) {
            console.error('Error logging in', error);
        }
    }

    return (
        <div className='login-container'>
            <form  action="POST" onSubmit={handleSubmit} className='login-form'>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;