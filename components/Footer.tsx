import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";

const StyledContainer = styled(Grid)`
  background-color: ${(props) => props.theme.palette.primary.main};
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
