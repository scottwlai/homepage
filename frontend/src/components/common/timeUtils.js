const timeOptions = {
  hour: "numeric",
  minute: "numeric",
  timeZone: "America/Chicago"
}

const dateOptions = {
  month: "short",
  year: "numeric"
}

export const formatTime = (dateTime) => {
  return new Intl.DateTimeFormat("en-US", timeOptions).format(new Date(dateTime));
};

export const formatDate = (dateTime) => {
  if (dateTime === undefined) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(dateTime));
}
