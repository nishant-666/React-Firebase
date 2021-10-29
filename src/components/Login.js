import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';
export default function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth key')

        if (authToken) {
            history.push('/home')
        }
    }, [])
    const handleRegister = () => {
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, email, password)
            .then((data) => {
                sessionStorage.setItem('Auth key', data._tokenResponse.refreshToken);
                history.push('/home')
                toast.success("Logged in Successfully!", {
                    pauseOnHover: true
                });
            })
            .catch(() => {
                toast.error("Please check the credentials", {
                    pauseOnHover: true
                });
            })

    }
    return (
        <div className="register-body">
            <ToastContainer />
            <h2>Login Page</h2>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder='Enter your Email ID'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Enter your Password'
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Field>

                <Button color="blue" type='submit' onClick={handleRegister}>Submit</Button>
            </Form>
        </div>
    )
}
