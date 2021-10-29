import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react';
import { database } from '../firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { useLocation, useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
export default function Update() {
    const location = useLocation();
    const history = useHistory();
    const [name, setName] = useState(location.state.updateData.Name);
    const [age, setAge] = useState(location.state.updateData.Age);
    const [phone, setPhone] = useState(location.state.updateData.PhoneNumber);
    const addData = () => {
        const data = doc(database, 'react-firebase', location.state.updateData.id)

        updateDoc(data, {Name: name, Age: Number(age), PhoneNumber: Number(phone)})
        .then(() => {
            history.push('/home');
        })
    }
    return (
        <div style={{ padding: 20 }}>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age'
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </Form.Field>
                <Button color="facebook" type='submit' onClick={addData}>Update</Button>
            </Form>
        </div>
    )
}
