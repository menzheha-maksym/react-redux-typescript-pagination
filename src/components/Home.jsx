import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectActivePage, setPage } from "../redux/paginationSlice";
import Pagination from "./Pagination";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const mounted = useRef(false);

  const activePage = useAppSelector(selectActivePage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    const currentPage = location.pathname.split("/")[1];
    // componentDidUpdate
    if (mounted.current && activePage !== Number(currentPage)) {
      navigate("/" + activePage);
      console.log("update");
      console.log("currentPage: ", currentPage);
      console.log("activePage: ", activePage);
    }
    // componentDidMount
    else if (!mounted.current) {
      console.log("mount");

      if (currentPage && activePage !== Number(currentPage)) {
        dispatch(setPage(Number(currentPage)));
      }
    }
    mounted.current = true;
  }, [activePage, dispatch, location.pathname, navigate]);

  function handleNavigate() {
    const currentPage = location.pathname.split("/")[1];
    if (currentPage) {
      navigate("/desc", { state: { prevPath: "/" + currentPage } });
    } else {
      navigate("/desc", { state: { prevPath: "/" } });
    }
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={() => handleNavigate()}>DESCRIPTION</button>
      <Pagination itemsCount={10} itemsPerPage={2} />
    </div>
  );
}
