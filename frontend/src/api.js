import Axios from "axios";

const API = "https://api.scottlai.tech/courses?";

// const departmentTranslator = {
//   "Accounting": "ACC",
//   "Asian Studies": "ANS",
//   "Chemistry": "CH",
//   "Computer Science": "CS",
//   "Government": "GOV",
//   "History": "HIS",
//   "Legal Environment of Business": "LEB",
//   "Mathematics": "M",
//   "Management": "MAN",
//   "Management Information Systems": "MIS",
//   "Music": "MUS",
//   "Statistics and Data Sciences": "SDS",
//   "Undergraduate Studies": "UGS"
// };

const semesterTranslator = {
  "Fall 2020": "f20",
  "Spring 2021": "s21",
  "Fall 2021": "f21",
  "Spring 2022": "s22",
  "Fall 2022": "f22",
  "Spring 2023": "s23"
};

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
  if (department) {
    // console.log(typeof(department));
    // let newDepartments = [];
    // for (let i = 0; i < department.length; i++) {
    //   newDepartments[i] = departmentTranslator[department[i]];
    // }
    // params.push(`department=${newDepartments.join(",")}`);
    params.push(`department=${department}`);
  }
  if (semester.length != 0) {
    let newSemesters = [];
    for (let i = 0; i < semester.length; i++) {
      newSemesters[i] = semesterTranslator[semester[i]];
    }
    params.push(`term=${newSemesters.join(",")}`);
  }
  if (grade.length != 0) {
    params.push(`minGrade=${gradeTranslator[grade[0]]}`)
    params.push(`maxGrade=${gradeTranslator[grade[1]]}`)
  }
  const final = API + params.join("&");
  console.log(final);
  return Axios.get(final);
};
