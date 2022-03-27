import { useUser } from "../../context/UserProvider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import React, { useState } from "react";
import { Drawer, ListItem, ListItemText } from "@mui/material";
import HeaderMenuItems from "./HeaderMenuItems";
import styled from "styled-components";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledHamburgerMenu = styled.div`
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
`;

const HeaderMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { user } = useUser();
  const { isLogged } = useUser();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Grid>
                <StyledHamburgerMenu />
                <StyledHamburgerMenu />
                <StyledHamburgerMenu />
              </Grid>
            </IconButton>
            <Drawer
              anchor="top"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <HeaderMenuItems handleCloseNavMenu={handleCloseNavMenu} />
            </Drawer>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            BudgetApp
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {isLogged ? (
              <IconButton onClick={handleOpenNavMenu}>
                {user?.displayName}
              </IconButton>
            ) : (
              <Link href="sign-in" passHref>
                <ListItem button component="a">
                  <ListItemText>Sign in</ListItemText>
                </ListItem>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Grid container>
        <Grid item xs={2}>
          <div>{"<"}</div>
        </Grid>
        <Grid item xs={8}>
          <div>MARZEC 2022</div>
        </Grid>
        <Grid item xs={2}>
          <div>{">"}</div>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default HeaderMenu;
