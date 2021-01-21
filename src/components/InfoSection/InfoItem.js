import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatarDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarContent: {
    backgroundColor: "#373737",
    width: theme.spacing(5),
    padding: "4px",
    height: theme.spacing(5),
  },
  textStyle: {
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
}));

const InfoItem = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.avatarDiv}>
        <Avatar className={classes.avatarContent} src={props.image}>
          H
        </Avatar>
      </div>
      <p className={classes.textStyle}>{props.text}</p>
    </div>
  );
};

export default InfoItem;
