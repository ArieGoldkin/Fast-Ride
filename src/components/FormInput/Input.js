import React, { useReducer, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { validate } from "../../hooks/InputValidators";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& .MuiOutlinedInput-input": {
      padding: "12.5px 14px",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#818181",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      position: "relative",
      marginTop: "1.2rem",
    },
  },
  textInputStyle: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("xs")]: {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
  },
  errorMessage: {
    position: "absolute",
    top: "269px",
    [theme.breakpoints.down("xs")]: {
      top: "-39px",
    },
  },
}));

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const classes = useStyles();
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element = (
    <TextField
      className={classes.textInputStyle}
      key={props.id}
      type={props.type}
      id={props.id}
      placeholder="#PIN"
      variant="outlined"
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
  );
  return (
    <div className={classes.root}>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className={classes.errorMessage}>{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
