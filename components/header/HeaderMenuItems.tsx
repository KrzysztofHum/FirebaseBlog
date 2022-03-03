import { MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useUser } from "../../context/UserProvider";

type Props = {
  href: string;
  label: string | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
};

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
      <ListItem
        href="/"
        label={user?.displayName}
        onClick={handleCloseNavMenu}
      />
      <ListItem href="/" label="SIGN OUT" onClick={handleSignOut} />
      <ListItem
        href="/expenses"
        label="EXPENSES"
        onClick={handleCloseNavMenu}
      />
      <ListItem href="/" label="INVESTMENTS" onClick={handleCloseNavMenu} />
    </>
  );
};

export default HeaderMenuItems;
