import React from "react";
import { connect } from "react-redux";

import * as actions from "../jungleComponents/actions/FastRiderActions";
import { checkPinNumber } from "../helpers/CheckPinCodeValidation";

import { makeStyles } from "@material-ui/core/styles";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useForm } from "../hooks/form-hook";
import { VALIDATOR_PIN_CODE } from "../hooks/InputValidators";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderRadius: "4px",
    width: "100%",
  },
}));

const Form = ({ selectedRide, onSubmitRide, token, setErrorMessage }) => {
  const classes = useStyles();
  const [formState, inputHandler, setFormData] = useForm(
    {
      pinNumber: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const onSubmitPinNumber = (event) => {
    event.preventDefault();
    setFormData(
      {
        ...formState.inputs,
      },
      false
    );
    const pinNumber = formState.inputs.pinNumber.value;
    console.log(formState.inputs.pinNumber.value);
    if (checkPinNumber(pinNumber)) {
      if (selectedRide.length === 0) {
        setErrorMessage({
          error: "Please choose a ride before ordering a ticket",
        });
      } else {
        const rideId = selectedRide;
        onSubmitRide({ token, pinNumber, rideId });
      }
    } else {
      setErrorMessage({ error: "Pin Code is not Valid, Try again" });
    }
  };

  return (
    <form className={classes.root} onSubmit={onSubmitPinNumber}>
      <Input
        id="pinNumber"
        type="text"
        validators={[VALIDATOR_PIN_CODE()]}
        errorText="please enter a valid pin number"
        onInput={inputHandler}
        initialValue={localStorage.getItem("pinNumber")}
      />
      <SubmitButton />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRide: state.userSelectItem.item,
    token: state.userSelectItem.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitRide: ({ token, pinNumber, rideId }) =>
      dispatch(actions.submitRideRequest({ token, pinNumber, rideId })),
    setErrorMessage: ({ error }) =>
      dispatch(actions.setErrorMessage({ error })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
