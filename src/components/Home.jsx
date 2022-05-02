import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [skip, setSkip] = useState(0);
  const [activePage, setActivePage] = useState(1);

  function updateSkip(skip) {
    setSkip(skip);
  }

  function updateActivePage(active) {
    if (active !== activePage) {
      setActivePage(active);
      // navigate("/" + active);
    }
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={() => navigate("/desc")}>DESCRIPTION</button>
      <Pagination
        itemsCount={10}
        itemsPerPage={2}
        skip={skip}
        updateSkip={updateSkip}
        updateActivePage={updateActivePage}
      />
    </div>
  );
}
