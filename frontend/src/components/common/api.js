import Axios from "axios";
import {
  semToAbbr,
  deptToAbbr,
  numToGrade
} from "../courses/filters";

const API = "https://api.scottwlai.com";

export const getCourses = (filters) => {
  const page = filters.page;
  const perPage = filters.perPage;
  const search = filters.search;
  const department = filters.departments.map((dept) => deptToAbbr[dept]);
  const semester = filters.semesters.map((sem) => semToAbbr[sem]);
  const minGrade = numToGrade[filters.minGrade];
  const maxGrade = numToGrade[filters.maxGrade];
  let params = [];
  params.push(`page=${page}`);
  params.push(`perPage=${perPage}`);
  if (search) {
    params.push(`search=${search}`);
  }
  if (department.length > 0) {
    params.push(`department=${department}`);
  }
  if (semester.length > 0) {
    params.push(`semester=${semester}`);
  }
  if (minGrade !== "CR") {
    params.push(`minGrade=${minGrade}`)
  }
  if (maxGrade !== "A") {
    params.push(`maxGrade=${maxGrade}`)
  }
  const url = `${API}/courses?${params.join("&")}`;
  console.log(url);
  return Axios.get(url);
};

export const getEducation = () => {
  const url = `${API}/education`;
  return Axios.get(url);
};

export const getProjects = (limit) => {
  let params = [];
  if (limit != null) {
    params.push(`limit=${limit}`);
  }
  const url = `${API}/projects?${params.join("&")}`;
  return Axios.get(url);
};

export const getExperience = () => {
  const url = `${API}/experience`;
  return Axios.get(url);
};

export const getHonors = () => {
  const url = `${API}/honors`;
  return Axios.get(url);
};

export const getSkills = (category) => {
  let params = [];
  if (category != null) {
    params.push(`category=${category}`);
  }
  const url = `${API}/skills?${params.join("&")}`;
  return Axios.get(url);
};

export const getCertifications = (limit) => {
  let params = [];
  if (limit != null) {
    params.push(`limit=${limit}`);
  }
  const url = `${API}/certifications?${params.join("&")}`;
  return Axios.get(url);
};
