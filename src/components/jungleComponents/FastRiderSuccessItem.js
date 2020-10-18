import React from "react";

import { convertToTime } from "../helpers/convertTime";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  resultWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
    padding: "7px",
    margin: "3px",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#373737",
    borderRadius: "1px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  rideNameStyle: {
    color: "#fff",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  rideZoneNameStyle: {
    color: "#656565",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.2rem",
    },
  },
  timeWrapper: {
    margin: "1rem",
  },
  timeStyle: {
    color: "#fff",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  codeWrapper: {},
  accessCodeStyle: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
}));

const FastRiderSuccessItem = ({ item }) => {
  console.log(item);
  const classes = useStyles();
  return (
    <Paper
      className={classes.resultWrapper}
      style={{ borderTop: `solid ${item.ride.zone.color}` }}
    >
      <div className={classes.titleWrapper}>
        <div className={classes.rideNameStyle}>{item.ride.name}</div>
        <div className={classes.rideZoneNameStyle}>{item.ride.zone.name}</div>
      </div>
      <div className={classes.timeWrapper}>
        <div className={classes.rideZoneNameStyle}>Return At</div>
        <div className={classes.timeStyle}>
          {convertToTime(item.return_time)}
        </div>
      </div>
      <div className={classes.codeWrapper}>
        <div className={classes.rideZoneNameStyle}>Use Access Code</div>
        <div className={classes.accessCodeStyle}>
          {item.access_code.toUpperCase()}
        </div>
      </div>
      
    </Paper>
  );
};

export default FastRiderSuccessItem;
