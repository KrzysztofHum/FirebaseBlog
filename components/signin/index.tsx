import { Box, Container, Divider, Typography } from "@mui/material";
import { ActiveForm } from "./ActiveForm";

export const SignIn = () => {
  return (
    <Container component="main" maxWidth="xs">
      <ActiveForm />
      <Box m={2}>
        <Divider />
      </Box>
      <Typography variant="caption" align="center">
        <div>
          Login provided by &nbsp;
          <a href="budgetapp.net" target="_blank" rel="noopener noreferrer">
            BudgetApp.net
          </a>
          .<br />
        </div>
      </Typography>
    </Container>
  );
};
