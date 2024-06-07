import { Form } from "./Form";
import { Header } from "./Header";

export const DonationBox = () => {
  const [isOpen, setIsOpen] = useState(true);

  const isMobile = useIsMobileScreen();

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto my-16 max-w-600 w-full bg-transparent shadow-lg">
      <Header handleClick={toggleOpen} />
      {isOpen && <Form />}
    </div>
  );
};
