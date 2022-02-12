import { Switch, useLocation } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Game from "./components/Game/Game";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Welcome exact path="/" />
          <Register path="/register" />
          <Login path="/login" />
          <Game path="/game" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
