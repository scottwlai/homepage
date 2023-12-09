import Axios from "axios";

const API = "https://api.scottlai.tech/courses?";

const gradeTranslator = {
  0: "Bminus",
  1: "B",
  2: "Bplus",
  3: "Aminus",
  4: "A"
};

export const getCourses = (currentPage, perPage, semester, department, grade) => {
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
  if (grade.length != 0) {
    params.push(`minGrade=${gradeTranslator[grade[0]]}`)
    params.push(`maxGrade=${gradeTranslator[grade[1]]}`)
  }
  const final = API + params.join("&");
  console.log(final);
  return Axios.get(final);
};
