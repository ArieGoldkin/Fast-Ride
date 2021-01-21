import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/FastRiderActions";
import { getSelectedItem } from "../../userComponents/userSelectors";
import { convertToTime } from "../../helpers/convertTime";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import clock2 from "../../../images/clock-2.png";
import ticket2 from "../../../images/ticket-2.png";

const useStyles = makeStyles((theme) => ({
  zoneColorDiv: {
    width: "100%",
  },
  itemTitle: {
    color: "#656565",
    fontSize: "0.7rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "flex-end",
  },
  itemName: {
    color: "#fff",
    margin: "0.7rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  footerItemSize: {
    display: "flex",
    justifyContent: "space-between",
    color: "#656565",
  },
  avatarClockSize: {
    width: "1.4rem",
    height: "1.4rem",
    marginRight: "0.2rem",
  },
  footerContent: {
    display: "inherit",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
}));

const FastRiderItem = (props) => {
  const { zone, name, time, tickets, onSelectedItem, selectedItem } = props;
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState(false);
  const [currentItem, setCurrentItem] = useState(props.id);

  const handleChangeSelect = () => {
    onSelectedItem(props.id);
  };

  useEffect(() => {
    if (selectedItem === currentItem) {
      setIsSelected(true);
      setCurrentItem(selectedItem);
    } else {
      setIsSelected(false);
    }
  }, [currentItem, selectedItem]);

  return (
    <Paper
      className={props.className}
      onClick={handleChangeSelect}
      style={{
        borderTop: `solid ${zone.color}`,
        backgroundColor: isSelected ? zone.color : "#373737",
      }}
    >
      <div className={classes.itemTitle}>{zone.name}</div>
      <div className={classes.itemName}>{name}</div>
      <div className={classes.footerItemSize}>
        <div className={classes.footerContent}>
          <Avatar src={clock2} className={classes.avatarClockSize} />
          {convertToTime(time)}
        </div>
        <div className={classes.footerContent}>
          <Avatar src={ticket2} className={classes.avatarClockSize} />
          {tickets}
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItem: getSelectedItem(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedItem: (itemId) =>
      dispatch(actions.setSelectedRIdeRequest(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastRiderItem);
