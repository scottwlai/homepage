import React, {
  useCallback,
  useEffect,
  useState
} from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput
} from "@mui/material";
import {
  debounce
} from 'lodash';

const SearchFilter = ({
  label,
  id,
  value,
  searchParam,
  setSearchParams,
  defaultValue,
  sx
}) => {
  const [ query, setQuery ] = useState(value || defaultValue);

  const handleChange = useCallback(
    debounce((query) => {
      const newValue = (query || defaultValue).trim();
      setSearchParams((prev) => {
        // update the search parameter
        prev.set(searchParam, newValue);
        // remove the search parameter if it is the default value
        if (newValue === defaultValue) {
          prev.delete(searchParam);
        }
        // reset the page to 1
        prev.delete("page");
        return new URLSearchParams(prev);
      });
    }, 1500),
    [ defaultValue, searchParam, setSearchParams ]
  );

  useEffect(() => {
    handleChange(query);
  }, [ query ]);

  return (
    <FormControl sx={sx}>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        label={label}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </FormControl>
  );
}

export default SearchFilter;
