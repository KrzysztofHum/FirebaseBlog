import { Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

export const Remind = () => {
  const [email, setEmail] = useState("testtest@wp.pl");
  const handleRegisterClick = () => {
    // TODO sendPasswordResentEmail
    console.log("RemindPassword");
  };
  return (
    <div>
      <Typography component="h1" variant="h3">
        Remind password
      </Typography>
      <Input
        name="e-mail"
        placeholder="e-mail"
        autoComplete="email"
        value={email}
        onChange={({ currentTarget: { value } }) => setEmail(value)}
      />
      <Button
        onClick={handleRegisterClick}
        fullWidth
        variant="contained"
        color="primary"
      >
        Send remind link
      </Button>
    </div>
  );
};
