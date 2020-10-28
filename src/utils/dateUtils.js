export function getNextSevenDays() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const next7Days = [];
  for (let i = 0; i < 7; i++) {
    next7Days.push(
      days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]
    );
  }
  return next7Days;
}

export const unixTimeToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const humanDateFormat = dateObject.toLocaleString();

  return humanDateFormat;
}

export const unixTimeToWeekDay = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const humanDateFormat = dateObject.toLocaleString("en-US", {weekday: "long"});

  return humanDateFormat;
}


