import { Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Welcome exact path="/" />
        <Register path="/register" />
        <Login path="/login" />
      </Switch>
    </div>
  );
}

export default App;
