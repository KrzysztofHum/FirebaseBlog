import { Button } from "@mui/material";
import React, { useState } from "react";
import { Footer } from "./Footer";
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

  return <div></div>;
};
