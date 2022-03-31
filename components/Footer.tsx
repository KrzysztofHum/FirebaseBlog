import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";

const StyledContainer = styled(Grid)`
  background-color: #556cd6;
  bottom: 0;
  height: 80px;
`;

const Footer = () => {
  return (
    <footer>
      <StyledContainer container alignItems="center" justifyContent="center">
        <Typography align="center">
          @ 2022{" "}
          <a
            href="https://budgetapp.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            BudgetApp.net
          </a>
          ! All rights reserved
        </Typography>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
