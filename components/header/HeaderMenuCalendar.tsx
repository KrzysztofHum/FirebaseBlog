import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useExpenses } from "../../context/ExpensesProvider";

const HeaderMenuCalendar = () => {
  const { selectedDate, setSelectedDate } = useExpenses();
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

  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue: any) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    );
  };
  const getNextMonth = () => {
    setSelectedDate(
      (prevValue: any) =>
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
