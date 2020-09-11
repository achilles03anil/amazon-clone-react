import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { ExpandLessSharp } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>>", authUser);
      if (authUser) {
        //Logim
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //Logout User
        dispatch({
          type: "SET_USRE",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
