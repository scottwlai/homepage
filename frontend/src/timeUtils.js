import { format } from "date-fns";

const TIME_FORMAT = "h:mm a"

const formatTime = (time) => {
  return format(new Date(time), TIME_FORMAT);
};

export default formatTime;
