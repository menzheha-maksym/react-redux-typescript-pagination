import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Description() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  function handleGoBackButton() {
    navigate(location.state.prevPath);
  }

  return (
    <div>
      <div>Description</div>
      <button onClick={handleGoBackButton}>GO BACK</button>
    </div>
  );
}
