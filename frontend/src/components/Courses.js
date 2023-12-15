import React, {
  useState, useEffect
} from "react"
import Wrapper from "./Wrapper";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Slider,
  Stack,
  Typography
} from "@mui/material";
import {
  Link, useSearchParams
} from "react-router-dom";
import {
  getCourses
} from "../api";
import CourseCard from "./CourseCard";

const departments = [
  "Accounting",
  "Asian Studies",
  "Chemistry",
  "Computer Science",
  "Government",
  "History",
  "Legal Environment of Business",
  "Mathematics",
  "Management",
  "Management Information Systems",
  "Music",
  "Statistics and Data Sciences",
  "Undergraduate Studies"
];

const deptToAbbr = {
  "Accounting": "ACC",
  "Asian Studies": "ANS",
  "Chemistry": "CH",
  "Computer Science": "CS",
  "Government": "GOV",
  "History": "HIS",
  "Legal Environment of Business": "LEB",
  "Mathematics": "M",
  "Management": "MAN",
  "Management Information Systems": "MIS",
  "Music": "MUS",
  "Statistics and Data Sciences": "SDS",
  "Undergraduate Studies": "UGS"
};

const abbrToDept = {
  "CS": "Computer Science",
  "MAN": "Management",
  "MIS": "Management Information Systems",
  "ACC": "Accounting",
  "ANS": "Asian Studies",
  "LEB": "Legal Environment of Business",
  "CH": "Chemistry",
  "M": "Mathematics",
  "HIS": "History",
  "SDS": "Statistics and Data Sciences",
  "MUS": "Music",
  "GOV": "Government",
  "UGS": "Undergraduate Studies"
};

const semToAbbr = {
  "Fall 2020": "f20",
  "Spring 2021": "s21",
  "Fall 2021": "f21",
  "Spring 2022": "s22",
  "Fall 2022": "f22",
  "Spring 2023": "s23"
};

const abbrToSem = {
  "f20": "Fall 2020",
  "s21": "Spring 2021",
  "f21": "Fall 2021",
  "s22": "Spring 2022",
  "f22": "Fall 2022",
  "s23": "Spring 2023"
};

const semesters = [
  "Fall 2020",
  "Spring 2021",
  "Fall 2021",
  "Spring 2022",
  "Fall 2022",
  "Spring 2023"
]

const gradeToNum = {
  "Bminus": 0,
  "B": 1,
  "Bplus": 2,
  "Aminus": 3,
  "A": 4
}

const numToGrade = {
  0: "Bminus",
  1: "B",
  2: "Bplus",
  3: "Aminus",
  4: "A"
}

const grades = [
  {
    value: 0,
    label: "B-"
  },
  {
    value: 1,
    label: "B"
  },
  {
    value: 2,
    label: "B+"
  },
  {
    value: 3,
    label: "A-"
  },
  {
    value: 4,
    label: "A"
  }
];

const Courses = () => {
  const [ courses, setCourses ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ perPage, setPerPage ] = useState(10);
  const [ count, setCount ] = useState(0);
  const [ grade, setGrade ] = useState([ 0, 4 ]);
  const [ semester, setSemester ] = useState([]);
  const [ department, setDepartment ] = useState([]);

  // Get the current search parameters and the function to update them
  const [ searchParams, setSearchParams ] = useSearchParams();

  useEffect(() => {
    let cachedData = JSON.parse(localStorage.getItem(getCacheKey()));

    /*
    33 classes
    8: 2 rows
    16: 4 rows
    32: 8 rows
    64: 16 rows
    */
    async function getCoursesData() {
      console.log(searchParams.toString());
      try {
        const response = await getCourses(searchParams);
        let data = response.data;
        localStorage.setItem(getCacheKey(), JSON.stringify(data));
        setCourses(data["courses"]);
        setCurrentPage(data["page"]);
        setPerPage(data["pageSize"]);
        setCount(data["total"]);
      } catch (error) {
        console.error(error);
      }
    }
    // cachedData = null;
    if (cachedData) {
      console.log("cache HIT! :D");
      setCourses(cachedData["courses"]);
      setCurrentPage(cachedData["page"]);
      setPerPage(cachedData["pageSize"]);
      setCount(cachedData["total"]);
    } else {
      console.log("cache miss :(");
      getCoursesData();
    }
  }, [ searchParams ]);

  /**
   * when the page loads, read the relevant search parameters
   * and update their corresponding state variables if necessary
   */
  useEffect(() => {
    // either null or a string of comma-separated abbreviations
    const depts = searchParams.get("department");
    const sems = searchParams.get("term");
    const minGrade = searchParams.get("minGrade");
    const maxGrade = searchParams.get("maxGrade");
    const page = searchParams.get("page");
    const perPage = searchParams.get("perPage");
    // if null, do nothing, since the state variable is already set to []
    if (depts != null) {
      // transform into array of full department names
      setDepartment(depts.split(",").map((dept) => abbrToDept[dept]));
    }
    if (sems != null) {
      setSemester(sems.split(",").map((sem) => abbrToSem[sem]));
    }
    if (minGrade != null && maxGrade != null) {
      setGrade([ gradeToNum[minGrade], gradeToNum[maxGrade] ]);
    }
    if (page != null) {
      setCurrentPage(page);
    }
    if (perPage != null) {
      setPerPage(perPage);
    }
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    setSearchParams((prevSearchParams) => {
      prevSearchParams.delete("page")
      let params = {
        ...Object.fromEntries(prevSearchParams.entries()),
        "page": newPage
      };
      if (newPage == null) {
        delete params["page"];
      }
      return new URLSearchParams(params);
    });
  };

  const handlePerPageChange = (event) => {
    const newPerPage = parseInt(event.target.value);
    setPerPage(newPerPage);
    setCurrentPage(1);
    setSearchParams((prevSearchParams) => {
      prevSearchParams.delete("page")
      prevSearchParams.delete("perPage")
      let params = {
        ...Object.fromEntries(prevSearchParams.entries()),
        "page": 1,
        "perPage": newPerPage
      };
      if (newPerPage == null) {
        delete params["perPage"];
      }
      return new URLSearchParams(params);
    });
  };

  const getCacheKey = () => {
    return `page:${currentPage}_perPage:${perPage}_semester:${semester.sort()}_department:${department.sort()}_minGrade:${grade[0]}_maxGrade:${grade[1]}`;
  };

  const handleGradeChange = (event, newGrade) => {
    // update the state variable
    setGrade(newGrade);
    setCurrentPage(1)
    // turn numbers into grades
    let minGrade = numToGrade[newGrade[0]]
    let maxGrade = numToGrade[newGrade[1]]
    // update the search parameter
    setSearchParams((prevSearchParams) => {
      // remove the old search paramter, since it will be updated
      prevSearchParams.delete("minGrade");
      prevSearchParams.delete("maxGrade");
      prevSearchParams.delete("page");
      // build the new searchParam
      let params = {
        ...Object.fromEntries(prevSearchParams.entries()),
        "minGrade": minGrade,
        "maxGrade": maxGrade
      };
      // if the search parameter no longer holds anything,
      // remove it from searchParams
      if (minGrade == null || maxGrade == null) {
        delete params["minGrade"];
        delete params["maxGrade"];
      }
      return new URLSearchParams(params);
    });
  };

  const handleSemesterChange = (event) => {
    // array of selected semesters
    const {
      value
    } = event.target;
    // update the state variable
    setSemester(value);
    setCurrentPage(1);
    // turn semesters into abbreviations
    let abbreviations = value.map(sem => semToAbbr[sem]);
    // update the search parameter
    setSearchParams((prevSearchParams) => {
      // remove the old search paramter, since it will be updated
      prevSearchParams.delete("term");
      prevSearchParams.delete("page");
      // build the new searchParam
      let params = {
        ...Object.fromEntries(prevSearchParams.entries()),
        "term": abbreviations.join(",")
      };
      // if the search parameter no longer holds at least one abbreviation,
      // remove it from searchParams
      if (params["term"].length === 0) {
        delete params["term"];
      }
      return new URLSearchParams(params);
    });
  };

  /**
   * when the department filter is updated,
   * update the department search parameter and state variable
   */
  const handleDepartmentChange = (event) => {
    // array of selected department names
    const {
      value
    } = event.target;
    // update the state variable
    setDepartment(value);
    setCurrentPage(1);
    // turn names into abbreviations
    let abbreviations = value.map(dept => deptToAbbr[dept]);
    // update the search parameter
    setSearchParams((prevSearchParams) => {
      // remove the old search parameter, since it will be updated
      prevSearchParams.delete("department");
      prevSearchParams.delete("page");
      // build the new searchParam
      let params = {
        ...Object.fromEntries(prevSearchParams.entries()),
        "department": abbreviations.join(",")
      };
      // if the search parameter no longer holds at least one abbreviation,
      // remove it from searchParams
      if (params["department"].length === 0) {
        delete params["department"];
      }
      return new URLSearchParams(params);
    });
  };

  return (
    <Wrapper title="Courses">
      <Grid item xs={12} sx={{
        display: "grid"
      }}>
        <Button component={Link} to={"/portfolio"}>
          <Typography variant="button" textTransform="none">
            Back to Portfolio
          </Typography>
        </Button>
        <Stack direction="row" spacing={2} my={2}>
          <FormControl fullWidth>
            <InputLabel id="select-semester-label">
              Semester
            </InputLabel>
            <Select
              labelId="select-semester-label"
              id="select-semester"
              multiple
              value={semester}
              onChange={handleSemesterChange}
              input={
                <OutlinedInput
                  id="select-semester-chip"
                  label="Semester"
                />
              }
              renderValue={(selected) => (
                <Box sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5
                }}>
                  {selected.map((value) => {
                    return (
                      <Chip
                        key={value}
                        label={value}
                      />
                    );
                  })}
                </Box>
              )}
            >
              {semesters.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-department-label">
              Department
            </InputLabel>
            <Select
              labelId="select-department-label"
              id="select-department"
              multiple
              value={department}
              onChange={handleDepartmentChange}
              input={
                <OutlinedInput
                  id="select-department-chip"
                  label="Department"
                />
              }
              renderValue={(selected) => (
                <Box sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5
                }}>
                  {selected.map((value) => {
                    return (
                      <Chip
                        key={value}
                        label={value}
                      />
                    );
                  })}
                </Box>
              )}
            >
              {departments.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Typography>
          Grade
        </Typography>
        <Slider
          getAriaValueText={(grade) => {
            return `${grade[0]} to ${grade[1]}`;
          }}
          value={grade}
          onChange={handleGradeChange}
          marks={grades}
          step={null}
          max={4}
          sx={{
            marginBottom: 8
          }}
        />
        <Grid container spacing={4}>
          {courses.map((course, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12} sm={6} md={4} lg={3}
              >
                <CourseCard
                  name={course.nickname ? course.nickname : course.name}
                  courseNumber={course.courseNumber}
                  instructors={course.instructors}
                  term={course.term}
                />
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          count={Math.ceil(count / perPage)}
          onChange={handlePageChange}
          page={currentPage}
          showFirstButton
          showLastButton
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: 2
          }}
        />
        <FormControl sx={{
          width: 100,
          justifySelf: "center",
          textAlign: "center"
        }}>
          <InputLabel
            id="per-page-label"
          >
            Page Size
          </InputLabel>
          <Select
            labelId="per-page-label"
            id="per-page-select"
            label="Page Size"
            defaultValue={10}
            onChange={handlePerPageChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Wrapper>
  );
}

export default Courses;
