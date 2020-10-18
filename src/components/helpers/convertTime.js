export const convertToTime = (date) => {
  const fullDate = new Date(date);
  const Minutes = fullDate.getMinutes();
  const Hours = fullDate.getHours();
  const newTimeString = `${Hours}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return newTimeString;
};
