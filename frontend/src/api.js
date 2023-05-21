import Axios from "axios";

const API = "https://api.scottlai.tech";

export const getCourses = (currentPage, perPage) => {
  return Axios.get(API + "/courses?page=" + currentPage + "&perPage=" + perPage);
};
