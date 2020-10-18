import { checkPinNumber } from "../helpers/CheckPinCodeValidation";

const VALIDATOR_PIN_CODE_REQUIRE = "CORRECT_CODE_TYPE";

export const VALIDATOR_PIN_CODE = () => ({ type: VALIDATOR_PIN_CODE_REQUIRE });

export const validate = (value, validators) => {
  // can implement more validators if required
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_PIN_CODE_REQUIRE) {
      isValid = isValid && checkPinNumber(value) === true;
    }
  }
  return isValid;
};
