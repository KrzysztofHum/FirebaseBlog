import { FaGoogle, FaLinkedin, FaApple, FaFacebook } from "react-icons/fa";
import { IconButton, Grid, Typography } from "@mui/material";

const METHODS = [
  {
    name: "Google",
    onClick: () => console.log("test google"),
    icon: <FaGoogle />,
  },
  {
    name: "Facebook",
    onClick: () => console.log("test facebook"),
    icon: <FaFacebook />,
  },
  {
    name: "LinkedIn",
    onClick: () => console.log("test LinkedIn"),
    icon: <FaLinkedin />,
  },
  {
    name: "Apple",
    onClick: () => console.log("test Apple"),
    icon: <FaApple />,
  },
];

import React from "react";

export const Footer = ({ children }) => {
  return (
    <Grid container alignItems="center">
      <br />
      <br />
      <Grid item>
        <Typography>Other login methods :&nbsp;</Typography>
      </Grid>
      <Grid item xs>
        {METHODS.map(({ name, icon, onClick }) => (
          <IconButton key={name} size="small" onClick={onClick} title={name}>
            {icon}
          </IconButton>
        ))}
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};
