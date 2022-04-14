import { Avatar, MenuItem, Stack } from "@mui/material";
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
  padding-top: 1rem;
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
        <div>
          <Stack direction="row">
            <Avatar>H</Avatar>
          </Stack>
        </div>
        <div>{user?.displayName}</div>
      </StyledUserInfo>
      <ListItem
        href="/expenses"
        label="My Expenses"
        onClick={handleCloseNavMenu}
      />
      <ListItem href="/" label="My Investments" onClick={handleCloseNavMenu} />
      <ListItem href="/" label="LOG OUT" onClick={handleSignOut} />
    </>
  );
};

export default HeaderMenuItems;
