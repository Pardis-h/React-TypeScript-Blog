import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Cookies
import { useCookies } from "react-cookie";

//Enums
import { COOKIES_NAMES } from "../../enums/public.enums";
import { Link } from "react-router-dom";

function Btn() {
  const [loginModalHandler, setLoginModalHandler] = useState(false);
  const [registerModalHandler, setRegisterModalHandler] = useState(false);
  const [cookies,setCookie, removeCookie] = useCookies([COOKIES_NAMES.ACCESS_TOKEN, COOKIES_NAMES.USER]);

  function LogoutHandler() {
    removeCookie(COOKIES_NAMES.ACCESS_TOKEN);
    removeCookie(COOKIES_NAMES.USER)    
  }

  const BTNS : JSX.Element = (
    <div>
    {(cookies.accessToken && cookies.user) ? (
      <div className="text-base md:text-sm font-semibold flex flex-col md:flex-row md:items-center gap-6 m-1 px-1 py-6 md:m-0 md:p-0">
        <a href="" onClick={LogoutHandler} className="">
          Logout
        </a>
        <Link to="/post-blog" className="bg-indigo-500 text-white rounded px-4 py-2 w-fit">Post Blog</Link>
      </div>
    ) : (
      <div className="text-base md:text-sm font-semibold flex flex-col md:flex-row md:items-center gap-6 m-1 px-1 py-6 md:m-0 md:p-0">
        <button 
          onClick={() => setLoginModalHandler(!loginModalHandler)}
        >
          Login
        </button>
        <button
          onClick={() => setRegisterModalHandler(!registerModalHandler)}
          className="bg-indigo-500 text-white rounded px-4 py-2 w-fit"
        >
          Signin
        </button>
      </div>
    )}
    </div>
  )
  return (
    <>
      {BTNS}
      {loginModalHandler ? (
        <LoginModal setShowLoginModal={setLoginModalHandler} />
      ) : (
        ""
      )}
      {registerModalHandler ? (
        <RegisterModal setShowRegisterModal={setRegisterModalHandler} />
      ) : (
        ""
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Btn;
