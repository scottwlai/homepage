const options = {
  hour: "numeric",
  minute: "numeric",
  timeZone: "America/Chicago"
}

const formatTime = (time) => {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(time));
};

export default formatTime;
