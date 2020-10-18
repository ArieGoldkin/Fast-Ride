import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    width: "20%",
    backgroundColor: "#373737",
    color: "#fff",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      width: "100%",
      bottom: 0,
      left: 0,
      borderRadius: 0,
      zIndex: "1000",
      transition: "bottom 1s",
      height: "4rem",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    "&:hover": {
      backgroundColor: "#646464",
      borderColor: "#646464",
      boxShadow: "none",
    },
  },
  hiddenButton: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const SubmitButton = () => {
  const classes = useStyles();

  const prevScrollY = useRef(0);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && !scrollDown) {
        setScrollDown(true);
      }
      if (currentScrollY === 0 && scrollDown) {
        setScrollDown(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDown]);

  return (
    <Button
      size="large"
      type="submit"
      disableFocusRipple
      className={`${classes.buttonStyle} ${scrollDown && classes.hiddenButton}`}
    >
      SUBMIT
    </Button>
  );
};

export default SubmitButton;
