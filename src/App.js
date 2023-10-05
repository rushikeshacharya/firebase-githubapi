import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//elements
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import FirebaseConfig from "./Config/FirebaseConfig";

// init firebase
firebase.initializeApp(FirebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
