import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FastRiderItem from "./FastRiderItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  paper: {
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
    padding: "7px",
    margin: "3px",
    textAlign: "center",
    width: "24%",
    backgroundColor: "#373737",
    borderRadius: "1px",
    [theme.breakpoints.down("lg")]: {
      width: "24%",
    },
    [theme.breakpoints.down("xs")]: {
      flexGrow: 2,
      width: "36%",
    },
  },
}));

const FastRiderList = ({ items }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {items.map((item) => {
        return (
          <FastRiderItem
            className={classes.paper}
            key={item.id}
            id={item.id}
            zone={item.zone}
            name={item.name}
            time={item.return_time}
            tickets={item.remaining_tickets}
          />
        );
      })}
    </Grid>
  );
};

export default FastRiderList;
