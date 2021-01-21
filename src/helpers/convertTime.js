export const convertToTime = (date) => {
  const fullDate = new Date(date);
  const Minutes = fullDate.getMinutes();
  const Hours = fullDate.getHours();
  const newTimeString = `${Hours}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return newTimeString;
};

export const getMinutes = (timeStr) => {
  let time = timeStr.split(":");
  return time[0] * 60 + time[1] * 1;
};

export const checkRideTime = () => {
  let start = getMinutes("19:00");
  let end = getMinutes("23:29");
  let start2 = getMinutes("00:00");
  let end2 = getMinutes("09:00");
  const date = new Date();
  let now = getMinutes(`${date.getHours()}:${date.getMinutes()} `);

  if ((now >= start && now <= end) || (now >= start2 && now <= end2)) {
    return false;
  }
  return true;
};