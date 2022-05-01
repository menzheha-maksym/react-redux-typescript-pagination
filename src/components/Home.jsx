import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

export default function Home() {
  const navigate = useNavigate();

  const [skip, setSkip] = useState(0);

  function updateSkip(skip) {
    setSkip(skip);
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
      />
    </div>
  );
}
