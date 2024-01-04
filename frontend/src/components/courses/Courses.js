import React, {
  useState,
  useEffect
} from "react"
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import {
  getCourses
} from "../common/api";
import CourseCard from "./CourseCard";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  useSearchParams
} from "react-router-dom";

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

/**
 * Read and parse the search parameters to get the filters
 *
 * @param {URLSearchParams} searchParams the query parameters from the URL
 * @returns an object containing the filters
 */
const getFilters = (searchParams) => {
  // semester filter
  const s = searchParams.get("term");
  const semesters = s ? s.split(",").map((sem) => abbrToSem[sem]).sort() : [];
  // department filter
  const d = searchParams.get("department");
  const departments = d ? d.split(",").map((dept) => abbrToDept[dept]).sort() : [];
  // grade filter
  let minGrade = searchParams.get("minGrade");
  minGrade = minGrade == null ? 0 : gradeToNum[minGrade];
  let maxGrade = searchParams.get("maxGrade");
  maxGrade = maxGrade == null ? 4 : gradeToNum[maxGrade];
  // pagination
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 12;
  // build the filters object
  return {
    semesters: semesters,
    departments: departments,
    minGrade: minGrade,
    maxGrade: maxGrade,
    page: page,
    perPage: perPage
  };
};

/**
 * Generates a cache key for the given filters
 *
 * @param filters an object containing the filters
 * @returns the cache key associated with the filters
 */
const getCacheKey = (filters) => {
  return `courses
    _semesters:${filters.semesters}
    _departments:${filters.departments}
    _minGrade:${filters.minGrade}
    _maxGrade:${filters.maxGrade}
    _page:${filters.page}
    _perPage:${filters.perPage}
  `;
};

/**
 * Makes an API call with the given filters and updates the data and cache
 *
 * @param filters an object containing the filters
 * @param setData function to update the data
 */
async function getCoursesData(filters, setData) {
  try {
    const response = await getCourses(filters);
    let data = response.data;
    localStorage.setItem(getCacheKey(filters), JSON.stringify(data));
    setData(data);
  } catch (error) {
    console.error(error);
  }
}

const Courses = () => {
  const [ data, setData ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ filters, setFilters ] = useState({});

  useEffect(() => {
    // begin fetching data
    setLoading(true);
    // read the search parameters and update the filters
    const filters = getFilters(searchParams);
    setFilters(filters);
    let cachedData = JSON.parse(localStorage.getItem(getCacheKey(filters)));
    // cachedData = null;
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
    } else {
      getCoursesData(filters, setData).then(() => {
        setLoading(false);
      });
    }
    // finished fetching data
  }, [ searchParams ]);

  /**
   * Updates the search parameters to reflect the new page
   *
   * @param {React.ChangeEvent} _ the event source of the callback (not used)
   * @param {number} newPage the page that was selected
   */
  const handlePageChange = (_, newPage) => {
    setSearchParams((prevSearchParams) => {
      // update the search parameter
      prevSearchParams.set("page", newPage);
      return new URLSearchParams(prevSearchParams);
    });
  };

  /**
   * Updates the search parameters to reflect the new page size
   *
   * Also resets the page to 1
   *
   * @param {React.ChangeEvent} event the event source of the callback
   */
  const handlePerPageChange = (event) => {
    // extract the new value (number of courses per page)
    const newPerPage = parseInt(event.target.value);
    setSearchParams((prevSearchParams) => {
      // update the search parameter
      prevSearchParams.set("perPage", newPerPage);
      // reset the page to 1
      prevSearchParams.delete("page");
      return new URLSearchParams(prevSearchParams);
    });
  };

  /**
   * Updates the search parameters to reflect the new grade range
   *
   * Also resets the page to 1
   *
   * @param {Event} _ the event source of the callback (not used)
   * @param {number} newGrade the new range of grades selected
   */
  const handleGradeChange = (_, newGrade) => {
    // extract the new values ([minGrade, maxGrade])
    const minGrade = numToGrade[newGrade[0]];
    const maxGrade = numToGrade[newGrade[1]];
    setSearchParams((prevSearchParams) => {
      // update the search parameter
      prevSearchParams.set("minGrade", minGrade);
      prevSearchParams.set("maxGrade", maxGrade);
      // reset the page to 1
      prevSearchParams.delete("page");
      return new URLSearchParams(prevSearchParams);
    });
  };

  /**
   * Updates the search parameters to reflect the new semester filter
   *
   * Also resets the page to 1
   *
   * @param {SelectChangeEvent} event the event source of the callback
   */
  const handleSemesterChange = (event) => {
    // extract the new value (array of selected semesters)
    const newSemesters = event.target.value;
    // turn semesters into abbreviations
    let abbreviations = newSemesters.map(sem => semToAbbr[sem]);
    setSearchParams((prevSearchParams) => {
      // update the search parameter
      prevSearchParams.set("term", abbreviations.join(","));
      // if there are no abbreviations, remove the search parameter
      prevSearchParams.delete("term", []);
      // reset the page to 1
      prevSearchParams.delete("page");
      return new URLSearchParams(prevSearchParams);
    });
  };

  /**
   * Updates the search parameters to reflect the new department filter
   *
   * Also resets the page to 1
   *
   * @param {SelectChangeEvent} event the event source of the callback
   */
  const handleDepartmentChange = (event) => {
    // extract the new value (array of selected departments)
    const newDepartments = event.target.value;
    // turn departments into abbreviations
    let abbreviations = newDepartments.map(dept => deptToAbbr[dept]);
    setSearchParams((prevSearchParams) => {
      // update the search parameter
      prevSearchParams.set("department", abbreviations.join(","));
      // if there are no abbreviations, remove the search parameter
      prevSearchParams.delete("department", []);
      // reset the page to 1
      prevSearchParams.delete("page");
      return new URLSearchParams(prevSearchParams);
    });
  };

  return (
    <main>
      <Wrapper>
        <Title>
          Courses
        </Title>
        <Breadcrumbs separator={<ChevronRightIcon />}>
          <LinkButton link="/portfolio/#" variant="text">
            Portfolio
          </LinkButton>
          <Button size="large">
            Courses
          </Button>
        </Breadcrumbs>
      </Wrapper>
      <Wrapper sx={{
        justifyItems: "normal",
        gap: "2rem"
      }}>
        <Card>
          <CardHeader title="Filters" />
          <CardContent sx={{
            display: "grid",
            gridTemplateAreas: `
              "semester department"\n
              "grade grade"\n
            `,
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
          }}>
            <FormControl fullWidth sx={{
              gridArea: "semester"
            }}>
              <InputLabel id="select-semester-label">
                Semester
              </InputLabel>
              {filters.semesters && (<Select
                labelId="select-semester-label"
                id="select-semester"
                multiple
                value={filters.semesters}
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
                sx={{
                  height: "100%"
                }}
              >
                {semesters.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>)}
            </FormControl>
            <FormControl fullWidth sx={{ gridArea: "department" }}>
              <InputLabel id="select-department-label">
                Department
              </InputLabel>
              {filters.departments && (<Select
                labelId="select-department-label"
                id="select-department"
                multiple
                value={filters.departments}
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
                sx={{
                  height: "100%"
                }}
              >
                {departments.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>)}
            </FormControl>
            <Box sx={{
              gridArea: "grade",
              borderRadius: "4px",
              border: "0.8px solid rgba(0, 0, 0, 0.23)",
              p: "1.5rem"
            }}>
              <Typography align="center" variant="h3" id="grade-slider">
                Grade
              </Typography>
              <Slider
                getAriaValueText={(grade) => {
                  return `${grade[0]} to ${grade[1]}`;
                }}
                aria-labelledby="grade-slider"
                value={[ filters.minGrade, filters.maxGrade ]}
                onChange={handleGradeChange}
                marks={grades}
                step={null}
                max={4}
              />
            </Box>
          </CardContent>
        </Card>
        {loading ? (
          <CircularProgress sx={{
            justifySelf: "center",
            alignSelf: "center"
          }} />
        ) : (
          <>
            <Grid container spacing={4}>
              {data.courses?.map((course, index) => {
                return (
                  <Grid
                    item
                    key={index}
                    xs={12} sm={6} md={4}
                  >
                    <CourseCard course={course} />
                  </Grid>
                );
              })}
            </Grid>
            <Pagination
              count={Math.ceil(data.total / data.pageSize)}
              onChange={handlePageChange}
              page={data.page}
              showFirstButton
              showLastButton
              sx={{
                display: "flex",
                justifyContent: "center"
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
                value={data.pageSize}
                onChange={handlePerPageChange}
              >
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={36}>36</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
      </Wrapper>
    </main>
  );
}

export default Courses;
