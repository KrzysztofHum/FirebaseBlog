import { Grid, Typography } from "@mui/material";
import React from "react";

const HeaderMenuCalendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Grid container>
      <Grid item xs={2}>
        <Typography align="center">{"<"}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography align="center">MARZEC 2022</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography align="center">{">"}</Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderMenuCalendar;
