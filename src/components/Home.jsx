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
    // componentDidUpdate
    if (mounted.current) {
      navigate("/" + activePage);
    }
    // componentDidMount
    else if (!mounted.current) {
      const currentPage = location.pathname.split("/")[1];
      if (currentPage && activePage !== Number(currentPage)) {
        dispatch(setPage(Number(currentPage)));
        console.log("kek");
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
