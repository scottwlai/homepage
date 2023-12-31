import Axios from "axios";

const API = "https://api.scottlai.tech";

export const getCourses = (searchParams) => {
  const currentPage = searchParams.get("page");
  const perPage = searchParams.get("perPage");
  const department = searchParams.get("department")
  const semester = searchParams.get("term");
  const minGrade = searchParams.get("minGrade");
  const maxGrade = searchParams.get("maxGrade");
  let params = [];
  if (currentPage != null) {
    params.push(`page=${currentPage}`);
  }
  params.push(`perPage=${perPage == null ? 12 : perPage}`);
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
  const final = `${API}/courses?${params.join("&")}`;
  console.log(final);
  return Axios.get(final);
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
