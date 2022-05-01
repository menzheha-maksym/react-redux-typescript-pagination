import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  itemsCount,
  itemsPerPage,
  updateSkip,
  skip,
  updateActivePage,
}) => {
  const [buttons, setButtons] = useState();
  const [activeButton, setActiveButton] = useState(1);

  const [disablePrevButton, setDisablePrevButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);

  function previousButtonClick() {
    updateSkip(skip - itemsPerPage);
    setActiveButton(activeButton - 1);
  }

  function nextButtonClick() {
    updateSkip(skip + itemsPerPage);
    setActiveButton(activeButton + 1);
  }

  useEffect(() => {
    const buttonsCount = Math.ceil(itemsCount / itemsPerPage);
    const buttonsArr = [];
    for (let i = 1; i < buttonsCount + 1; i++) {
      buttonsArr.push(i);
    }
    setButtons(buttonsArr);
  }, [itemsCount, itemsPerPage]);

  useEffect(() => {
    updateSkip(activeButton * itemsPerPage - itemsPerPage);
  }, [activeButton, itemsPerPage, updateSkip]);

  useEffect(() => {
    updateActivePage(activeButton);
  }, [activeButton, updateActivePage]);

  useEffect(() => {
    if (skip - itemsPerPage < 0) {
      setDisablePrevButton(true);
    } else {
      setDisablePrevButton(false);
    }

    if (skip + itemsPerPage >= itemsCount) {
      setDisableNextButton(true);
    } else {
      setDisableNextButton(false);
    }
  }, [itemsCount, itemsPerPage, skip]);

  return (
    <>
      <div className={styles["container"]}>
        <button disabled={disablePrevButton} onClick={previousButtonClick}>
          previous
        </button>
        <div className={styles["number-buttons-container"]}>
          {buttons
            ? buttons.map((button, i) => {
                if (button === activeButton) {
                  return (
                    <button className={styles["active-button"]} key={i}>
                      {button}
                    </button>
                  );
                } else {
                  return (
                    <button key={i} onClick={() => setActiveButton(i + 1)}>
                      {button}
                    </button>
                  );
                }
              })
            : null}
        </div>
        <button disabled={disableNextButton} onClick={nextButtonClick}>
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
