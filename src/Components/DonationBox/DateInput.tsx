import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { saveDate } from "Reducers/donationSlice";
import { getMonthName } from "utils";
import { INPUT_CLASS } from "./Form";

const arrowClass =
  "w-6 h-6 hover:bg-grey-hover focus:bg-grey-focus rounded-lg items-center justify-center flex text-grey-midnight";

export const DateInput: React.FC = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveDate({ month, year }));
  }, [month, year, dispatch]);

  const decrementDate = () => {
    const { month: newMonth, year: newYear } = adjustMonthYear(month - 1, year);
    setMonth(newMonth);
    setYear(newYear);
  };

  const incrementDate = () => {
    const { month: newMonth, year: newYear } = adjustMonthYear(month + 1, year);
    setMonth(newMonth);
    setYear(newYear);
  };

  const isPrevButtonDisabled = isPastDate(month, year);

  return (
    <div className={`${INPUT_CLASS} relative justify-center`}>
      <div className="p-4 flex items-center justify-between gap-4">
        <button
          className={`absolute left-2 ${arrowClass}`}
          onClick={decrementDate}
          disabled={isPrevButtonDisabled}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="sm"
            className="text-midnight-grey"
          />
        </button>
        <div className="flex flex-col items-center text-purple-gray">
          <span className="text-base leading-5" aria-label="current month">
            {getMonthName(month)}
          </span>
          <span className="text-xs" aria-label="current year">
            {year}
          </span>
        </div>
        <button
          className={`absolute right-2 ${arrowClass}`}
          onClick={incrementDate}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            className="text-midnight-grey"
          />
        </button>
      </div>
    </div>
  );
};

const isPastDate = (month: number, year: number) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  return year === currentYear && month <= currentMonth;
};

const adjustMonthYear = (
  month: number,
  year: number
): { month: number; year: number } => {
  if (month === -1) {
    return { month: 11, year: year - 1 };
  }
  if (month === 12) {
    return { month: 0, year: year + 1 };
  }
  return { month, year };
};
