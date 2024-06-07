import logo from "images/logo.svg";

export const Navbar: React.FC = () => (
  <nav className="flex items-center h-navbar bg-white w-full">
    <img className="ml-10" src={logo} alt="Logo" />
  </nav>
);
