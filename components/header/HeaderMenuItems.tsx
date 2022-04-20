import {
  Avatar,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import { useUser } from "../../context/UserProvider";

// type Props = {
//   href: string;
//   label: string | undefined;
//   onClick?: () => void;
//   children?: React.ReactNode;
// };

const StyledUserInfo = styled.div`
  margin: 0;
  padding-top: 1rem;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const StyledAvatar = styled(Avatar)`
  background-color: white;
  color: #acacac;
`;

const StyledGridBorder = styled(Grid)`
  border-bottom: #9b9a9a 1px solid;
`;

// const ListItem = ({ href, label, onClick, children }: Props) => (
//   <Link href={href} passHref>
//     <MenuItem onClick={onClick}>
//       {label}
//       {children}
//     </MenuItem>
//   </Link>
// );

// ListItem.defaultProps = {
//   onClick: () => null,
//   children: null,
// };

const HeaderMenuItems = ({ handleCloseNavMenu }: any) => {
  const { signOut, user } = useUser();

  const handleSignOut = () => {
    signOut();
    handleCloseNavMenu();
  };

  return (
    <>
      <StyledUserInfo>
        <Grid container justifyContent="space-between" pl={2}>
          <Grid item>
            <StyledAvatar></StyledAvatar>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            >
              BudgetApp
            </Typography>
          </Grid>
        </Grid>
        <Grid pl={2} pb={1}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            {user?.displayName}
          </Typography>
        </Grid>
      </StyledUserInfo>
      <Grid m={0}>
        <Grid>
          <Grid p={2}>
            <Typography>Options</Typography>
          </Grid>
          {/* <ListItem
            href="/expenses"
            label="Expenses"
            onClick={handleCloseNavMenu}
          />
          <ListItem href="/" label="Investments" onClick={handleCloseNavMenu} />
          <ListItem href="/" label="LOG OUT" onClick={handleSignOut} /> */}
          <Link href="expenses" passHref>
            <ListItemButton onClick={handleCloseNavMenu}>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Expenses" />
            </ListItemButton>
          </Link>
          <Link href="investments" passHref>
            <ListItemButton onClick={handleCloseNavMenu}>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Investments" />
            </ListItemButton>
          </Link>
          <Link href="logout" passHref>
            <ListItemButton onClick={handleSignOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </Link>
        </Grid>
        <Grid p={2}>
          <Grid>
            <Typography>Settings</Typography>
          </Grid>
          <Grid
            direction="row"
            container
            alignItems="flex-start"
            spacing={2}
            mt={2}
            ml={0}
          >
            <Grid xs={1}>
              <LanguageIcon />
            </Grid>
            <StyledGridBorder xs={10}>
              <Typography>Language</Typography>
              <Typography>English</Typography>
            </StyledGridBorder>
          </Grid>
          <Grid
            direction="row"
            container
            alignItems="flex-start"
            spacing={2}
            mt={2}
            ml={0}
          >
            <Grid xs={1}>
              <LanguageIcon />
            </Grid>
            <StyledGridBorder xs={10}>
              <Typography>Theme</Typography>
              <Typography>Light</Typography>
            </StyledGridBorder>
          </Grid>
          <Grid
            direction="row"
            container
            alignItems="flex-start"
            spacing={2}
            mt={2}
            ml={0}
          >
            <Grid xs={1}>
              <LanguageIcon />
            </Grid>
            <StyledGridBorder xs={10}>
              <Typography>Default currency</Typography>
              <Typography>Polish złoty - zł</Typography>
            </StyledGridBorder>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderMenuItems;
