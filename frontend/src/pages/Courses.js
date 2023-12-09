import React, {
  useState, useEffect
} from "react"
import Layout from "../components/Layout";
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
  Typography
} from "@mui/material";
import {
  Link, useSearchParams
} from "react-router-dom";
import {
  getCourses
} from "../api";
import CourseCard from "../components/CourseCard";

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
  "SDS": "Statistics and Data Sceinces",
  "MUS": "Music",
  "GOV": "Government",
  "UGS": "Undergraduate Studies"
};

const semesters = [
  "Fall 2020",
  "Spring 2021",
  "Fall 2021",
  "Spring 2022",
  "Fall 2022",
  "Spring 2023"
]

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

    async function getCoursesData() {
      console.log(searchParams.toString());
      try {
        const response = await getCourses(currentPage, perPage, semester, searchParams.get("department"), grade);
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
    cachedData = null;
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
  }, [ currentPage, perPage, semester, searchParams, grade ]);

  /**
   * when the page loads, read the relevant search parameters
   * and update their corresponding state variables if necessary
   */
  useEffect(() => {
    // either null or a string of comma-separated abbreviations
    const depts = searchParams.get("department");
    // if null, do nothing, since the state variable is already set to []
    if (depts != null) {
      // transform into array of full department names
      setDepartment(depts.split(",").map((dept) => abbrToDept[dept]));
    }
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (event) => {
    const newPerPage = parseInt(event.target.value);
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  const getCacheKey = () => {
    return `page:${currentPage}_perPage:${perPage}_semester:${semester}_department:${department}_grade:${grade}`;
  };

  const handleGradeChange = (event, newGrade) => {
    setGrade(newGrade);
    console.log(grade);
  }

  const handleSemesterChange = (event) => {
    const {
      value
    } = event.target;
    setSemester(value);
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
    // turn names into abbreviations
    let abbreviations = value.map(name => deptToAbbr[name]);
    // update the search parameter
    setSearchParams((prevSearchParams) => {
      // remove the old search parameter, since it will be updated
      prevSearchParams.delete("department");
      // build the new searchParam
      let params = {
        ...prevSearchParams,
        "department": abbreviations.join(",")
      };
      // if the search parameter no longer holds at least one abbreviation,
      // remove it from searchParams
      if (params["department"].length === 0) {
        delete params["department"];
      }
      console.log(params)
      return params
    });
  };

  return (
    <Layout title="Courses">
      <Grid item xs={12}>
        <Button component={Link} to={"/portfolio"}>
          <Typography variant="button" textTransform="none">
            Back to Portfolio
          </Typography>
        </Button>
        <Pagination
          count={Math.ceil(count / perPage)}
          onChange={handlePageChange}
          page={currentPage}
          showFirstButton
          showLastButton
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        />
        <FormControl fullWidth>
          <InputLabel
            id="per-page-label"
          >
            Results per Page
          </InputLabel>
          <Select
            labelId="per-page-label"
            id="per-page-select"
            label="Results per Page"
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
        <Slider
          getAriaValueText={(grade) => {
            return `${grade[0]} to ${grade[1]}`;
          }}
          value={grade}
          onChange={handleGradeChange}
          marks={grades}
          step={null}
          max={4}
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
      </Grid>
    </Layout>
  );
}

export default Courses;
