export const calcAsciiLetter = (numArray) => {
  let result = 0;
  for (let place = 0, index = 1; place < numArray.length; place++, index++) {
    if (index % 2) {
      result += numArray[place] * 1;
    } else {
      let num = numArray[place] * 2;
      if (num > 9) {
        let digitNum = num % 10;
        let tensDigit = parseInt((num / 10) % 10);
        result += digitNum;
        result += tensDigit;
      } else {
        result += num;
      }
    }
  }
  const letter = String.fromCharCode((result % 26) + 65);
  return letter;
};

export const checkPinNumber = (pinNumber) => {
  const stringArray = pinNumber.split("");
  const firstLetter = stringArray.slice(3, 7).map((num) => +num);
  const secondLetter = stringArray.slice(8, 12).map((num) => +num);
  const getFirstLetter = stringArray[stringArray.length - 2];
  const getSecondLetter = stringArray[stringArray.length - 1];
  const CheckFirstLetter = calcAsciiLetter(firstLetter);
  const CheckSecondLetter = calcAsciiLetter(secondLetter);
  if (
    CheckFirstLetter === getFirstLetter &&
    CheckSecondLetter === getSecondLetter
  ) {
    return true;
  } else {
    return false;
  }
};
