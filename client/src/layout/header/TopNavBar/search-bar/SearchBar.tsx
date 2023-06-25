import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";
import CardInterface from "../../../../cards/models/interfaces/CardInterface";
import useCards from "../../../../cards/hooks/useCards";

const SearchBar = () => {
  const {isDark}= useTheme();
const [searchParams, setSearch]=useSearchParams();


const handleChange = ({target}:CardInterface[]|any|null )=> setSearch({q:target.value});


  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          sx={{ backgroundColor:isDark? "#333333" :"#e3f2fd" }}
          placeholder="Search"
          value={searchParams.get("q"?? "")}
          onChange={handleChange}
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
