import React, { useState } from "react";
import HistoryMonthDropdown from "./HistoryMonthDropdown";

export default function HistoryTable({ noradNumber, objectOrigin }) {
  const [yearChosen, setYearChosen] = useState("");
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const renderYearChoices = () => {
    const years = [
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011"
    ];

    return years.map(year => {
      return (
        <div key={year} className="history-year-dropdown__row">
          <h1
            onClick={() => {
              setYearChosen(year);
              setShowMonthDropdown(!showMonthDropdown);
            }}
          >
            <p className="history-year-dropdown__year-text">{year}</p>
          </h1>
          {yearChosen === year && showMonthDropdown === true ? (
            <HistoryMonthDropdown
              objectOrigin={objectOrigin}
              noradNumber={noradNumber}
              yearNumber={yearChosen}
            />
          ) : null}
        </div>
      );
    });
  };

  return <section>{renderYearChoices()}</section>;
}
