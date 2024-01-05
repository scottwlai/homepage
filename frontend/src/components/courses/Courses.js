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
import ExactFilter from "./ExactFilter";
import RangeFilter from "./RangeFilter";
import {
  pageSizes,
  departments,
  deptToAbbr,
  abbrToDept,
  semToAbbr,
  abbrToSem,
  semesters,
  gradeToNum,
  numToGrade,
  grades
} from "./filters";
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Pagination,
  Unstable_Grid2 as Grid
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  useSearchParams
} from "react-router-dom";

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
  // response from the API (courses and pagination data)
  const [ data, setData ] = useState({});
  // whether the data is being fetched
  const [ loading, setLoading ] = useState(true);
  // search parameters from the URL
  const [ searchParams, setSearchParams ] = useSearchParams();
  // filters from the search parameters; used to update the UI
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
      // remove the search parameter if it is the default value
      prevSearchParams.delete("page", 1);
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
      // remove the search parameter if it is the default value
      prevSearchParams.delete("perPage", 12);
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
      // remove the search parameters if they are the default value
      prevSearchParams.delete("minGrade", "Bminus");
      prevSearchParams.delete("maxGrade", "A");
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
      // remove the search parameter if it is the default value
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
      // remove the search parameter if it is the default value
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
        <Card raised>
          <CardHeader title="Filters"/>
          <CardContent sx={{
            display: "grid",
            gridTemplateAreas: `
              "semester department"\n
              "grade grade"
            `,
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
          }}>
            <ExactFilter
              multiple
              label="Semester"
              id="select-semester"
              value={filters.semesters}
              onChange={handleSemesterChange}
              options={semesters}
              sx={{
                gridArea: "semester"
              }}
            />
            <ExactFilter
              multiple
              label="Department"
              id="select-department"
              value={filters.departments}
              onChange={handleDepartmentChange}
              options={departments}
              sx={{
                gridArea: "department"
              }}
            />
            <RangeFilter
              label="Grade"
              id="grade-slider"
              value={[ filters.minGrade, filters.maxGrade ]}
              onChange={handleGradeChange}
              options={grades}
              sx={{
                gridArea: "grade"
              }}
            />
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
              {data.courses?.map((course, index) => (
                <Grid
                  key={index}
                  xs={12} sm={6} md={4}
                >
                  <CourseCard course={course} />
                </Grid>
              ))}
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
            <ExactFilter
              label="Page Size"
              id="per-page"
              value={data.pageSize}
              onChange={handlePerPageChange}
              options={pageSizes}
              sx={{
                width: 100,
                justifySelf: "center",
                textAlign: "center"
              }}
            />
          </>
        )}
      </Wrapper>
    </main>
  );
}

export default Courses;
