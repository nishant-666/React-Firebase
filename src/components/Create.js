import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react';
import { database } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);
    const databaseRef = collection(database, 'react-firebase');
    const addData = () => {
        addDoc(databaseRef, { Name: name, Age: Number(age), PhoneNumber: Number(phone) })
            .then(() => {
                toast.success("Data Sent Successfully!", {
                    pauseOnHover: true
                });
            })
    }
    return (
        <div style={{ padding: 20 }}>
            <ToastContainer />
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name'
                        onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age'
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Field>
                <Button color="facebook" type='submit' onClick={addData}>Submit</Button>
            </Form>
        </div>
    )
}
