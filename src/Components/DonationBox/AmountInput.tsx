import React, { useState, ChangeEvent, useCallback } from "react";
import dollarSign from "images/dollarSign.svg";
import { useDispatch, useSelector } from "react-redux";
import { saveAmount } from "Reducers/donationSlice";
import { formatNumber } from "utils";
import { RootState } from "Reducers";
import { INPUT_CLASS } from "./Form";

const MAX_VALUE = 100000;

export const AmountInput: React.FC = () => {
  const { amount } = useSelector((state: RootState) => state.donation);
  const [value, setValue] = useState<string>(amount);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value;

      const formattedValue = formatNumber(inputValue, MAX_VALUE);

      setValue(formattedValue);
      dispatch(saveAmount(formattedValue));
    },
    [dispatch]
  );

  return (
    <div
      className={`${INPUT_CLASS} rounded-lg focus-within:border-midnight-purple `}
    >
      <div className="p-4 flex">
        <img src={dollarSign} alt="dollar sign" />
        <input
          className="pl-2 text-purple-gray w-40 focus:outline-none"
          value={value}
          placeholder="0.00"
          type="text"
          aria-label="donation amount"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
