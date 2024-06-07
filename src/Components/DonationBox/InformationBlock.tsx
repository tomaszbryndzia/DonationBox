import { useSelector } from "react-redux";
import { RootState } from "Reducers";
import { calculateMonthsDifference, formatNumber, getMonthName } from "utils";

export const InformationBlock: React.FC = () => {
  const { amount, month, year } = useSelector(
    (state: RootState) => state.donation
  );

  const monthDiff = calculateMonthsDifference(month, year);
  const totalAmount = Number(amount.replace(/,/g, "")) * monthDiff;

  return (
    <div className="border border-stroke xs:border-none rounded-lg mt-4">
      <div className="p-4 flex justify-between items-center">
        <span className="text-xl text-ebony-blue font-500">Total amount</span>
        <span className="text-3xl font-700 text-purple-gray">
          $ {formatNumber(totalAmount.toString())}
        </span>
      </div>
      <div className="mt-0 xs:mt-6 bg-mist-gray py-4 px-6 text-xs font-normal border-none border-stroke xs:border rounded-lg">
        You will be sending <b>${amount || 0}</b> every month, until{" "}
        <b>
          {getMonthName(month)} {year}
        </b>
        . Thank you!
      </div>
    </div>
  );
};
