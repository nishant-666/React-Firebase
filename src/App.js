import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import { app } from './firebase-config';
import Create from './components/Create';
import Update from './components/Update';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/update" exact>
          <Update />
        </Route>
      </div>
    </Router>
  );
}

export default App;
