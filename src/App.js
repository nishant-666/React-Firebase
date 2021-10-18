import Login from './components/Login';
import './App.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBtRIMLkSVfptH4ASinlEfnKhP-mBwUV24",
    authDomain: "react-register-12564.firebaseapp.com",
    projectId: "react-register-12564",
    storageBucket: "react-register-12564.appspot.com",
    messagingSenderId: "1074586181097",
    appId: "1:1074586181097:web:76f6185600d69942fabf78",
    measurementId: "G-TFLX02VGQ1"
};
initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
