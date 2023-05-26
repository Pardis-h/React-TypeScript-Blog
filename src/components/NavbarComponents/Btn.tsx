import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Btn() {
  const [loginModalHandler, setLoginModalHandler] = useState(false);
  const [registerModalHandler, setRegisterModalHandler] = useState(false);
  return (
    <>
      <div className="text-base md:text-sm font-semibold flex flex-col md:flex-row md:items-center gap-6 m-1 px-1 py-6 md:m-0 md:p-0">
        <button href="#" onClick={() => setLoginModalHandler(!loginModalHandler)}>Login</button>
        <button href="#" onClick={() => setRegisterModalHandler(!registerModalHandler)} className="bg-indigo-500 text-white rounded px-4 py-2 w-fit">
          Signin
        </button>
      </div>
      {loginModalHandler ? <LoginModal setShowLoginModal={setLoginModalHandler}/> : ''}
      {registerModalHandler ? <RegisterModal setShowRegisterModal={setRegisterModalHandler}/> : ''}
    </>
    
  );
}

export default Btn;
