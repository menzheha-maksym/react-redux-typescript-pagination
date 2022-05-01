import React from "react";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Description</div>
      <button onClick={() => navigate("/")}>GO BACK</button>
    </div>
  );
}
