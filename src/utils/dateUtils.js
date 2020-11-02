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

export const unixTimeToDateObject = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;

  return new Date(milliseconds);
}

export const unixTimeToDate = (unixTimestamp) => {
  
  return unixTimeToDateObject(unixTimestamp)
            .toLocaleString("pt-PT", {year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

export const unixTimeToWeekDay = (unixTimestamp) => {
 
  return unixTimeToDateObject(unixTimestamp)
            .toLocaleString("en-CA", {weekday: "long", day: '2-digit'});
}

export const unixTimeToHours = (unixTimestamp) => {
  
  return unixTimeToDateObject(unixTimestamp)
            .toLocaleString("en-US", {hour: 'numeric', minute: 'numeric'});
}
