import { Avatar, Grid, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useUser } from "../../context/UserProvider";

type Props = {
  href: string;
  label: string | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
};

const StyledUserInfo = styled.div`
  margin: 0;
  padding-top: 1rem;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const StyledAvatar = styled(Avatar)`
  background-color: white;
  color: #acacac;
`;

const ListItem = ({ href, label, onClick, children }: Props) => (
  <Link href={href} passHref>
    <MenuItem onClick={onClick}>
      {label}
      {children}
    </MenuItem>
  </Link>
);

ListItem.defaultProps = {
  onClick: () => null,
  children: null,
};

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
        <ListItem
          href="/expenses"
          label="My Expenses"
          onClick={handleCloseNavMenu}
        />
        <ListItem
          href="/"
          label="My Investments"
          onClick={handleCloseNavMenu}
        />
        <ListItem href="/" label="LOG OUT" onClick={handleSignOut} />
      </Grid>
    </>
  );
};

export default HeaderMenuItems;
