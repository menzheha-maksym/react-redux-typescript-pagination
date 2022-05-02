import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  nextPage,
  prevPage,
  selectActivePage,
  selectPages,
  setPage,
  addPages,
  disablePrevButton,
  enablePrevButton,
  disableNextButton,
  enableNextButton,
  selectNextButton,
  selectPrevButton,
} from "../redux/paginationSlice";
import styles from "./Pagination.module.css";

interface PaginationProps {
  itemsCount: number;
  itemsPerPage: number;
  updateSkip: (skip: number) => void;
  skip: number;
  activePage: number;
  updateActivePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  itemsPerPage,
  updateSkip,
  skip,
  activePage: activePageProp,
  updateActivePage,
}) => {
  const dispatch = useAppDispatch();

  const activePage = useAppSelector(selectActivePage);
  const pages = useAppSelector(selectPages);
  const nextButton = useAppSelector(selectNextButton);
  const prevButton = useAppSelector(selectPrevButton);

  function previousButtonClick() {
    updateSkip(skip - itemsPerPage);
    dispatch(prevPage());
  }

  function nextButtonClick() {
    updateSkip(skip + itemsPerPage);
    dispatch(nextPage());
  }

  useEffect(() => {
    dispatch(setPage(activePageProp));
  }, [activePageProp, dispatch]);

  useEffect(() => {
    dispatch(addPages({ itemsCount, itemsPerPage }));
  }, [dispatch, itemsCount, itemsPerPage]);

  useEffect(() => {
    updateSkip(activePage * itemsPerPage - itemsPerPage);
  }, [activePage, itemsPerPage, updateSkip]);

  useEffect(() => {
    updateActivePage(activePage);
  }, [activePage, updateActivePage]);

  useEffect(() => {
    if (skip - itemsPerPage < 0) {
      dispatch(disablePrevButton());
    } else {
      dispatch(enablePrevButton());
    }

    if (skip + itemsPerPage >= itemsCount) {
      dispatch(disableNextButton());
    } else {
      dispatch(enableNextButton());
    }
  }, [dispatch, itemsCount, itemsPerPage, skip]);

  return (
    <>
      <div className={styles["container"]}>
        <button disabled={!prevButton} onClick={previousButtonClick}>
          previous
        </button>
        <div className={styles["number-buttons-container"]}>
          {pages
            ? pages.map((button, i) => {
                if (button === activePage) {
                  return (
                    <button className={styles["active-button"]} key={i}>
                      {button}
                    </button>
                  );
                } else {
                  return (
                    <button key={i} onClick={() => dispatch(setPage(i + 1))}>
                      {button}
                    </button>
                  );
                }
              })
            : null}
        </div>
        <button disabled={!nextButton} onClick={nextButtonClick}>
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
