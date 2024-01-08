import React from "react";
import ExactFilter from "./ExactFilter";
import RangeFilter from "./RangeFilter";
import {
  departments,
  deptToAbbr,
  semToAbbr,
  semesters,
  numToGrade,
  grades
} from "./filters";
import {
  Card,
  CardContent,
  CardHeader
} from "@mui/material";

const CourseFilters = ({
  filters,
  setSearchParams
}) => (
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
        translator={semToAbbr}
        searchParam="semester"
        setSearchParams={setSearchParams}
        defaultValue={[]}
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
        translator={deptToAbbr}
        searchParam="department"
        setSearchParams={setSearchParams}
        defaultValue={[]}
        options={departments}
        sx={{
          gridArea: "department"
        }}
      />
      <RangeFilter
        label="Grade"
        id="grade-slider"
        value={[ filters.minGrade, filters.maxGrade ]}
        translator={numToGrade}
        searchParam={[ "minGrade", "maxGrade" ]}
        setSearchParams={setSearchParams}
        defaultValue={[ 0, 4 ]}
        options={grades}
        sx={{
          gridArea: "grade"
        }}
      />
    </CardContent>
  </Card>
);

export default CourseFilters;
