import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";

// interface
interface IProp {
  setIsMobileShow: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<IProp> = ({ setIsMobileShow }) => {
  return (
    <div className="text-base md:text-sm font-semibold flex flex-col md:flex-row items-start gap-8 mb-3 py-4 md:mb-0 md:p-0">
      <Link to="/" onClick={() => setIsMobileShow(false)}>
        Home
      </Link>
      <Link to="/blogs" onClick={() => setIsMobileShow(false)}>
        Blogs
      </Link>
      <Link to="/dashboard" onClick={() => setIsMobileShow(false)}>
        Dashboard
      </Link>
      <Link to="/about-us" onClick={() => setIsMobileShow(false)}>
        About Us
      </Link>
    </div>
  );
};

export default Menu;
