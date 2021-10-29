import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useHistory, Link } from 'react-router-dom';
import { database } from '../firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
    let history = useHistory();
    const [userData, setUserData] = useState([]);
    const [update, setUpdate] = useState(false);
    const databaseRef = collection(database, 'react-firebase');
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth key')

        if (authToken) {
            history.push('/home')
        }

        if (!authToken) {
            history.push('/')
        }

        const getData = async () => {
            const data = await getDocs(databaseRef);
            setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setUpdate(false);
        }

        getData()
    }, [update])
    const onDelete = (id) => {
        const data = doc(database, 'react-firebase', id);
        deleteDoc(data)
            .then(() => {
                setUpdate(true);
                toast.success("Data Deleted Successfully!", {
                    pauseOnHover: true
                });
            })
    }
    const handleLogout = () => {
        sessionStorage.removeItem('Auth key');
        history.push('/')
    }
    return (
        <div style={{ padding: 20 }}>
            <ToastContainer />
            <Button color="red" onClick={handleLogout}>Log Out</Button>
            {userData.map((item) => {
                return (
                    <div style={{ marginTop: 30 }}>
                        <h3>Name: {item.Name}</h3>
                        <h3>Age: {item.Age}</h3>
                        <h3>Phone Number: {item.PhoneNumber}</h3>

                        <Link to={{
                            pathname: '/update', state: {
                                updateData: item
                            }
                        }}>
                            <Button color="black">Update this field</Button>
                        </Link>

                        <Button color="red" onClick={() => onDelete(item.id)}>Delete this field</Button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
