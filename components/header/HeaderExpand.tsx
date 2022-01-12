import { IconButton } from "@mui/material";
import React from "react";
import { useUser } from "../../context/UserProvider";

const HeaderExpand = () => {
  const { user } = useUser();

  return (
    <>
      <IconButton>
        {user?.displayName}
        {/* <Avatar src={user?.photoURL} /> */}
      </IconButton>
    </>
  );
};

export default HeaderExpand;
