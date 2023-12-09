import Axios from "axios";

const API = "https://api.scottlai.tech/courses?";

export const getCourses = (currentPage, perPage, semester, department, minGrade, maxGrade) => {
  let params = [];
  if (currentPage != null) {
    params.push(`page=${currentPage}`);
  }
  if (perPage != null) {
    params.push(`perPage=${perPage}`);
  }
  if (department != null) {
    params.push(`department=${department}`);
  }
  if (semester != null) {
    params.push(`term=${semester}`);
  }
  if (minGrade != null) {
    params.push(`minGrade=${minGrade}`)
  }
  if (maxGrade != null) {
    params.push(`maxGrade=${maxGrade}`)
  }
  const final = API + params.join("&");
  console.log(final);
  return Axios.get(final);
};
