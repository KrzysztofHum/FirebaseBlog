import { Button } from "@mui/material";
import React, { useState } from "react";
import { Footer } from "./Footer";
import Login from "./Login";
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

  return <div></div>;
};
