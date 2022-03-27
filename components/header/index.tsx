import { Grid } from "@mui/material";
import styled from "styled-components";
import React from "react";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled(Grid)`
  width: 100%;
  height: 100px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
