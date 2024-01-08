import React, {
  useState,
  useEffect
} from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import {
  getCourses
} from "../common/api";
import CourseCard from "./CourseCard";
import ExactFilter from "./ExactFilter";
import {
  pageSizes,
  abbrToDept,
  abbrToSem,
  gradeToNum
} from "./filters";
import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Pagination,
  Unstable_Grid2 as Grid
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  useSearchParams
} from "react-router-dom";
import CourseFilters from "./CourseFilters";

/**
 * Translates a search parameter to its equivalent state value
 *
 * @param {string | string[]} param a key in `translator` or an array whose elements might be keys
 * @param translator object mapping search parameters to their equivalent state values
 * @returns the equivalent state value of the search parameter
 */
const translate = (param, translator) => {
  if (typeof param === "string") {
    return translator[param];
  } else if (Array.isArray(param)) {
    return param
      .filter((param) => param in translator)
      .map((param) => translator[param])
      .sort();
  } else {
    return [];
  }
};

/**
 * Read, parse, error-check, and return the filters from the search parameters
 *
 * @param {URLSearchParams} searchParams the query parameters from the URL
 * @returns an object containing the filters
 */
const getFilters = (searchParams) => {
  // semester filter
  const sem = searchParams.get("term");
  const semesters = translate(sem ? sem.split(",") : [], abbrToSem);
  // department filter
  const dept = searchParams.get("department");
  const departments = translate(dept ? dept.split(",") : [], abbrToDept);
  // grade filter
  const min = searchParams.get("minGrade");
  const max = searchParams.get("maxGrade");
  const minGrade = translate(min in gradeToNum ? min : "Bminus", gradeToNum);
  const maxGrade = translate(max in gradeToNum ? max : "A", gradeToNum);
  // pagination
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("perPage")) || 12;
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
const getCoursesData = async(filters, setData) => {
  try {
    const response = await getCourses(filters);
    let data = response.data;
    localStorage.setItem(getCacheKey(filters), JSON.stringify(data));
    setData(data);
  } catch (error) {
    console.error(error);
  }
};

const Courses = () => {
  // response from the API (courses and pagination data)
  const [ data, setData ] = useState({});
  // whether the data is being fetched
  const [ loading, setLoading ] = useState(true);
  // search parameters from the URL
  const [ searchParams, setSearchParams ] = useSearchParams();
  // error checked filters from the search parameters
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
        <CourseFilters
          filters={filters}
          setSearchParams={setSearchParams}
        />
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
              searchParam="perPage"
              setSearchParams={setSearchParams}
              defaultValue={12}
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
