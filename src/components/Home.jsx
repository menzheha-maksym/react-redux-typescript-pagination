import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectActivePage } from "../redux/paginationSlice";
import Pagination from "./Pagination";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const mounted = useRef(false);

  const activePage = useAppSelector(selectActivePage);

  useEffect(() => {
    console.log(location);
  }, [location]);

  // useEffect(() => {
  //   const currentPage =
  // }, [])

  useEffect(() => {
    if (mounted.current) {
      navigate("/" + activePage);
    }
    mounted.current = true;
  }, [activePage, navigate]);

  function handleNavigate() {
    const currentPage = location.pathname.split("/")[1];
    if (currentPage) {
      navigate("/desc", { state: { prevPath: "/" + currentPage } });
    } else {
      navigate("/desc", { state: { prevPath: "/" } });
    }
  }

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div>
      <div>Home</div>
      <button onClick={() => handleNavigate()}>DESCRIPTION</button>
      <Pagination itemsCount={10} itemsPerPage={2} />
    </div>
  );
}
