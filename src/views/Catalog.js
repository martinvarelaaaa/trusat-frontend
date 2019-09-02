import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CatalogNavBar from "../catalog/components/CatalogNavBar";
import CatalogTable from "../catalog/components/CatalogTable";
import DownloadCatalogFilterTleButton from "../catalog/components/DownloadCatalogFilterTleButton";

export default function Catalog() {
  const [catalogFilter, setCatalogFilter] = useState("priorities");
  const [range, setRange] = useState({ start: 0, end: 20 });

  return (
    <React.Fragment>
      <NavLink style={{ color: "white" }} to="/catalog/submit">
        <span
          style={{
            border: "1px solid #5F5F5F",
            display: "inline-block",
            padding: "0.5em"
          }}
        >
          Submit data
        </span>
      </NavLink>

      {catalogFilter === "priorities" || catalogFilter === "all" ? (
        <DownloadCatalogFilterTleButton catalogFilter={catalogFilter} />
      ) : null}

      <CatalogNavBar
        catalogFilter={catalogFilter}
        setCatalogFilter={setCatalogFilter}
        setRange={setRange}
      />
      <CatalogTable
        catalogFilter={catalogFilter}
        range={range}
        setRange={setRange}
      />
    </React.Fragment>
  );
}
