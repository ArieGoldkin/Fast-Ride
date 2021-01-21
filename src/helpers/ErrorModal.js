import React from "react";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    display: "none",
    position: "relative",
  },
  container: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  paper: {
    margin: theme.spacing(1),
    backgroundColor: "#373737",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  showModalStyle: {
    width: "70%",
    top: "25vh",
    display: "flex",
    zIndex: "100000",
    position: "absolute",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      top: "47vh",
    },
  },
  header: {
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  btnStyle: {
    color: "#fff",
    fontSize: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

const ErrorModal = (props) => {
  const classes = useStyles();

  return (
    <div className={props.show ? classes.showModalStyle : classes.root}>
      <div className={classes.container}>
        <Grow in={props.show}>
          <Paper elevation={4} className={classes.paper}>
            <h2 className={classes.header}>{props.error}</h2>
            <Button className={classes.btnStyle} onClick={props.onClear}>
              OK
            </Button>
          </Paper>
        </Grow>
      </div>
    </div>
  );
};

export default ErrorModal;
