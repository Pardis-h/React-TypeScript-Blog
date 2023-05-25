import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Menu from "./NavbarComponents/Menu";
import Btn from "./NavbarComponents/Btn";

function Navbars() {
  const [isMobileShow, setIsMobileShow] = useState(false);
  return (
    <header className="bg-white">
      <nav className="container mx-auto flex items-center justify-between p-6 md:p-6">
        <div className="">
          <a href="" className="text-indigo-600 font-bold">
            <h1>ReactBlog</h1>
          </a>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="hidden md:block">
          <Btn />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMobileShow(!isMobileShow)}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </nav>
      {isMobileShow ? (
        <div className=" w-screen h-screen bg-white fixed inset-0 p-6">
          <div className="flex items-center justify-end">
            <XMarkIcon
              onClick={() => setIsMobileShow(false)}
              className="w-6 h-6 "
            />
          </div>
          <div className='divide-y'>
            <Menu />
            <Btn />
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Navbars;
