import { Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Welcome exact path="/" />
        <Register path="/register" />
      </Switch>
    </div>
  );
}

export default App;
