import React from "react";

import InfoItem from "./InfoItem";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ticket from "../../images/ticket-1.png";
import arrow from "../../images/arrow-1.png";
import clock from "../../images/clock-1.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  wrapper: {
    flexGrow: 1,
    width: "100%",
    marginTop: "1.5rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "inherit",
    backgroundColor: "inherit",
    [theme.breakpoints.down("xs")]: {
      padding: "16px 69px",
    },
  },
  responsiveGrid: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  responsiveGridItem: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px",
    },
  },
}));

const ticketText =
  "Enter your park ticket #PIN number, then select the desired ride while nothing the started return time";
const arrowText = "Press 'submit' to confirm and retrieve your access code";
const clockText =
  "When the time comes, use the special FastRider line to cut out a considerable wait time";

const InfoList = () => {
  const isActive = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Grid container spacing={7} className={classes.responsiveGrid}>
          <Grid
            item={isActive ? true : false}
            xs
            className={classes.responsiveGridItem}
          >
            <Paper elevation={0} className={classes.paper}>
              <InfoItem image={ticket} text={ticketText} />
            </Paper>
          </Grid>
          <Grid
            item={isActive ? true : false}
            xs
            className={classes.responsiveGridItem}
          >
            <Paper elevation={0} className={classes.paper}>
              <InfoItem image={arrow} text={arrowText} />
            </Paper>
          </Grid>
          <Grid
            item={isActive ? true : false}
            xs
            className={classes.responsiveGridItem}
          >
            <Paper elevation={0} className={classes.paper}>
              <InfoItem image={clock} text={clockText} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InfoList;
