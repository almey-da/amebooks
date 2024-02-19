import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  //useEffect
  //code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          //the user is logged in
          dispatch({
            type: "SET_USER",
            user: authUser
          });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return() =>{
      //any clean up operations go in here
      unsubscribe();
    };
  }, []);

  console.log("USER IS >> ",user);

  return (
    <Router>
        <div className="app">
          <Routes>
          <Route 
              path="/checkout" 
              element={
              <>
                <Header  />
                <Checkout />
              </>
              }/>
            <Route 
              path="/login" 
              element={
                <>
                <Login />
                </>
              } />
            <Route 
              path="/" 
              element={
              <>
                <Header />
                <Home />
              </>
              }/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
