import { Button } from "Components/Button/Button";
import { AmountInput } from "./AmountInput";
import { DateInput } from "./DateInput";
import { InformationBlock } from "./InformationBlock";

export const INPUT_CLASS =
  "border border-stroke font-500 text-2xl flex items-center h-60px";

export const Form: React.FC = () => (
  <div className="xs:p-10 p-6 bg-white border-b rounded-b-lg border-white">
    <div className="flex justify-between flex-col xs:flex-row">
      <div className="flex-grow xs:w-1/2 xs:mr-2 ">
        <label className="mb-2">I can donate</label>
        <AmountInput />
      </div>
      <div className="flex-grow xs:w-1/2 xs:ml-2 mt-2 xs:mt-0 ">
        <label className="mb-2">Every month until</label>
        <DateInput />
      </div>
    </div>
    <InformationBlock />
    <div className="pt-8 flex justify-between">
      <Button hideMobile>Cancel</Button>
      <Button variant="dark">Continue</Button>
    </div>
  </div>
);
