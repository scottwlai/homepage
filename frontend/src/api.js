import Axios from "axios";

const API = "https://api.scottlai.tech";

export const getCourses = () => {
  return Axios.get(API + "/courses");
};
