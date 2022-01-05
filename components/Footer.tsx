import { Grid } from "@mui/material";
import styled from "styled-components";
import React from "react";

const StyledContainer = styled(Grid)`
  background-color: black;
  bottom: 0;
  text-align: center;
  height: 80px;
`;

const Footer = () => {
  return (
    <footer>
      <StyledContainer
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          @ 2022{" "}
          <a
            href="https://fitnotes.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            fitnotes.net
          </a>
          ! All rights reserved
        </Grid>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
