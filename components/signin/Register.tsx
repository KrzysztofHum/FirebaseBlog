import { Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("name");
  const [email, setEmail] = useState("test@wp.pl");
  const [password, setPassword] = useState("123123");
  const [confirmPassword, setConfirmPassword] = useState("123123");

  const handleRegisterClick = () => {
    console.log("register");
  };
  return (
    <div>
      <Typography component="h1" variant="h3">
        Sign in
      </Typography>
      <Input
        name="full-name"
        placeholder="full name"
        onChange={({ currentTarget: { value } }) => setFullName(value)}
        value={fullName}
        autoComplete="name"
      />
      <Input
        name="e-mail"
        placeholder="e-mail"
        onChange={({ currentTarget: { value } }) => setEmail(value)}
        value={email}
        autoComplete="email"
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={({ currentTarget: { value } }) => setPassword(value)}
        value={password}
        autoComplete="current-password"
      />
      <Input
        name="password-confirm"
        type="password"
        placeholder="confirm password"
        onChange={({ currentTarget: { value } }) => setConfirmPassword(value)}
        value={confirmPassword}
        autoComplete="current-password"
      />
      <Button
        onClick={handleRegisterClick}
        fullWidth
        variant="contained"
        color="primary"
      >
        Register
      </Button>
    </div>
  );
};

export default Register;
