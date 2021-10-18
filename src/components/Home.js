import React, { useEffect } from 'react'
import {
    useHistory
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
    let history = useHistory();
    useEffect(() => {
        let userToken = localStorage.getItem('Refresh Token')
        if (!userToken) {
            history.push('/')
            toast.error("Please Log in First", {
                pauseOnHover: true
            });
        }

        if (userToken) {
            history.push('/home')
        }
    }, [])
    return (
        <div>
            <ToastContainer />
            <h2>Home Page</h2>
        </div>
    )
}
