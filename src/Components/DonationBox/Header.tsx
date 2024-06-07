import donationBox from "images/donationBox.svg";

type HeaderProps = {
  handleClick: () => void;
};

export const Header: React.FC<HeaderProps> = ({ handleClick }) => (
  <div className="bg-salmon p-5 xs:flex relative border-t rounded-t-lg border-salmon">
    <span
      className="absolute right-4 xs:hidden rounded-lg bg-trigger-salmon w-6 h-6 flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      X
    </span>
    <img src={donationBox} className="mx-auto xs:m-0" alt="Donation Box" />
    <div className="pl-5 text-center xs:text-left">
      <h2 className="text-midnight-purple">The giving block</h2>
      <h3 className="text-midnight-purple">Set up your donation goal!</h3>
    </div>
  </div>
);
