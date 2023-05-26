import { Dispatch, FC, SetStateAction } from "react";

interface IProp {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
}
const RegisterModal: FC<IProp> = ({ setShowRegisterModal }) => {
  return (
    <div className=" z-10 fixed inset-0 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={() => setShowRegisterModal(false)}
      ></div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl p-6 sm:w-full max-w-lg z-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Register
          </h2>
          <form action="" className="mx-2 md:mx-8 space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="text-gray-600 text-sm leading-5"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                autoComplete="fullName"
                autoFocus
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="emial"
                className="text-gray-600 text-sm leading-5"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="emial"
                autoFocus
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="emial"
                className="text-gray-600 text-sm leading-5"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="border-0 shadow-sm w-full block ring-1 ring-inset ring-gray-300 rounded-md mt-2 py-1.5 px-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600"
              />
            </div>
            <div className="flex items-center justify-between gap-2 pt-3">
              <button className="bg-indigo-600 text-white w-full rounded-md px-4 py-2 mb-8">
                Register
              </button>
              <button
                className="bg-gray-200 text-gray-900 w-full rounded-md px-4 py-2 mb-8"
                onClick={() => setShowRegisterModal(false)}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
