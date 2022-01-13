import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useUser } from "../../context/UserProvider";

const HeaderExpand = () => {
  const { user, signOut } = useUser();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenu}>{user?.displayName}</IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={signOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderExpand;
