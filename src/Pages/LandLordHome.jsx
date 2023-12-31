import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";
import { auth } from "../firebase";


const LandLordHome = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up an observer to listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  const getGreetingMessage = () => {
    if (user) {
      // If a user is logged in, show the greeting with the username
      return `Hi, ${user.displayName || "user"}!`;
    } else {
      // If no user is logged in, show a generic message
      return "Welcome!";
    }
  };

  return (
    <div>
        <Link to = "/addlisting">
      <button> add Listing </button>
      </Link>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h1>{getGreetingMessage()}</h1>
      </div>
    </div>
  );
};
