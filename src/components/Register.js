import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = () => {
        const authentication = getAuth();

        createUserWithEmailAndPassword(authentication, email, password)
        .then(() => {
            toast.success("Registered Successfully!", {
                pauseOnHover: true
            });
        })
        .catch(() => {
            toast.error("Email already exist. Please Check the Email", {
                pauseOnHover: true
            });
        })
        
    }
    return (
        <div className="register-body">
            <h2>Register Page</h2>
            <ToastContainer />
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
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Field>

                <Button color="blue" type='submit' onClick={handleRegister}>Submit</Button>
            </Form>
        </div>
    )
}
