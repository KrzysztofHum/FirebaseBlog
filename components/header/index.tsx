import { Grid } from "@mui/material";
import styled from "styled-components";
import React from "react";

const StyledHeader = styled(Grid)`
  width: 100%;
  background-color: green;
  height: 80px;
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
