import { useState } from "react";
import LoginModal from "./LoginModal";

function Btn() {
  const [loginModalHandler, setLoginModalHandler] = useState(false)
  return (
    <>
      <div className="text-base md:text-sm font-semibold flex flex-col md:flex-row md:items-center gap-6 m-1 px-1 py-6 md:m-0 md:p-0">
        <button href="#" onClick={() => setLoginModalHandler(!loginModalHandler)}>Login</button>
        <button href="#" className="bg-indigo-500 text-white rounded px-4 py-2 w-fit">
          Signin
        </button>
      </div>
      {loginModalHandler ? <LoginModal/> : ''}
    </>
    
  );
}

export default Btn;
