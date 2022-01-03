import { Button } from "@mui/material";
import React, { useState } from "react";
import { Footer } from "./Footer";
import Login from "./Login";
import Register from "./Register";
import { Remind } from "./Remind";

export const ActiveForm = () => {
  const [currentForm, setCurrentForm] = useState("REMIND");

  if (currentForm === "REMIND") {
    return (
      <>
        <Remind />
        <Footer>
          <Button onClick={() => setCurrentForm("LOGIN")}>Back to login</Button>
        </Footer>
      </>
    );
  }

  if (currentForm === "LOGIN") {
    return (
      <>
        <Login
          onRemindClick={() => {
            setCurrentForm("REMIND");
          }}
        />
        <Footer>
          <Button onClick={() => setCurrentForm("REGISTER")}>Register</Button>
        </Footer>
      </>
    );
  }
  if (currentForm === "REGISTER") {
    return (
      <>
        <Register />
        <Footer>
          <Button onClick={() => setCurrentForm("LOGIN")}>Login</Button>
        </Footer>
      </>
    );
  }

  return <div></div>;
};
