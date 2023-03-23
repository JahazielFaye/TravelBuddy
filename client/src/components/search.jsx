import React, { useState } from "react";
import "./search.css";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guests
        <PeopleIcon />
        <input min={0} defaultValue={2} type="number" />
      </h2>
      <Button onClick={() => navigate("/search")}>
        Search 
      </Button>
    </div>
  );
}

export default Search;
