import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const HeaderMenuCalendar = () => {
  const monthNames = [
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

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    );
  };
  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1)
    );
  };

  return (
    <Grid container>
      <Grid item xs={2}>
        <Button onClick={getPrevMonth}>
          <Typography color="common.white" align="center">
            {"<"}
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Typography align="center">
          {`${
            monthNames[selectedDate.getMonth()]
          } - ${selectedDate.getFullYear()}`}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={getNextMonth}>
          <Typography color="common.white" align="center">
            {">"}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeaderMenuCalendar;
