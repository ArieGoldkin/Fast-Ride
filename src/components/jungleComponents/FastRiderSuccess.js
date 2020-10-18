import React, { useState } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import * as actions from "./actions/FastRiderActions";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InfoItem from "../infoComponent/InfoItem";
import FastRiderSuccessItem from "./FastRiderSuccessItem";
import vIcon from "../../images/ico-04.png";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "inherit",
    backgroundColor: "inherit",
    margin: "0 auto",
    width: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
      marginBottom: "2rem",
    },
  },
  btnStyle: {
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgb(55 55 55)",
    },
  },
}));

const successText = `Thank you for using The Jungle\u2122 FastRider ticket system - your access code is now ready!`;

const FastRiderSuccess = ({ result, setSuccessToFalse }) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  const redirectToStart = () => {
    setRedirect(true);
  };

  let redirectPage = null;
  if (redirect) {
    setSuccessToFalse();
    return (redirectPage = <Redirect to="/" />);
  }

  return (
    <Paper elevation={0} className={classes.paperWrapper}>
      {redirectPage}
      <h1 className={classes.header}>The Jungle&trade; FastRider Service</h1>
      <InfoItem image={vIcon} text={successText} />
      <FastRiderSuccessItem item={result} />
      <Button className={classes.btnStyle} onClick={redirectToStart}>
        GO BACK
      </Button>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.fastRideDataResult.item,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSuccessToFalse: () => dispatch(actions.changeSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastRiderSuccess);
