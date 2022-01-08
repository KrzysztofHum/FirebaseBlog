import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { login } from "../../firebase/users";

type Props = {
  onRemindClick(): void;
};

const Login = ({ onRemindClick }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleLoginClick = () => {
    login({ email, password })
      .then(() => {
        console.log("login user");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div>
      <Typography component="h1" variant="h3">
        Sign in
      </Typography>
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
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={rememberMe}
                onChange={(_, checked) => setRememberMe(checked)}
              />
            }
            label="Remember Me"
          />
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" onClick={onRemindClick}>
            Forgot password
          </Link>
        </Grid>
      </Grid>
      <Button
        onClick={handleLoginClick}
        variant="contained"
        fullWidth
        color="primary"
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
