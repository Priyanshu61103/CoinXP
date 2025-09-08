import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { coinContext } from "../context/context";
import { useSelector, useDispatch } from "react-redux";
import { setVisible } from "../Redux/slice/slice4";

const SignUp = () => {
  const obj = useContext(coinContext);
  const [login, setLogin] = useState(false);
  const mode = useSelector((state) => state.mode.value);
  const visible = useSelector((state) => state.visible.value);
  return (
    <div className="relative top-5 left-110">
      {obj.visible && (
        <div id="signUp" className="h-0 w-80 border-none rounded-lg ">
          <div className="relative left-70 top-10">
            <p
              className={
                mode === "light" ? "text-white text-2xl" : "text-black text-2xl"
              }
              onClick={obj.signUpController}
            >
              X
            </p>
          </div>

          <div
            className={
              mode === "light"
                ? "h-100 flex content-center gap-5 flex-wrap justify-center p-10 z-50 bg-black text-white"
                : "h-100 flex content-center gap-5 flex-wrap justify-center p-10 z-50 bg-white text-black"
            }
          >
            {!login && (
              <div>
                <div className="h-20 w-70 flex justify-center items-center">
                  <h1 className="text-xl font-bold">Sign Up</h1>
                </div>
                <form className="flex content-center gap-2 flex-wrap">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-10 w-70 border-2 border-gray-400  rounded-lg p-2"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-10 w-70 border-2 border-gray-400  rounded-lg p-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-10 w-70 border-2 border-gray-400  rounded-lg p-2"
                  />
                  <button className="h-10 w-70 mt-4 bg-orange-600 text-white border-none rounded-lg">
                    Create Account
                  </button>
                  <div className="flex gap-2 mt-2">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="text-xs">
                      By continuing,i agree to the terms of use & privacy policy
                    </label>
                  </div>

                  <div className="text-xs flex  m-5 mb-0">
                    <p>
                      Already have an account ?{" "}
                      <span
                        className="text-orange-400"
                        onClick={() => setLogin(true)}
                      >
                        Login here
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            )}

            {login && (
              <div>
                <div className="h-20 w-70 flex justify-center items-center">
                  <h1 className="text-xl font-bold">Login</h1>
                </div>
                <form className="flex content-center gap-2 flex-wrap">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-10 w-70 border-2 border-gray-400  rounded-lg p-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-10 w-70 border-2 border-gray-400 rounded-lg p-2"
                  />
                  <button className="h-10 w-70 mt-4 bg-orange-600 text-white border-none rounded-lg">
                    Login
                  </button>
                  <div className="flex gap-2 mt-2">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="text-xs">
                      By continuing,i agree to the terms of use & privacy policy
                    </label>
                  </div>

                  <div className="text-xs flex  m-5 mb-0">
                    <p>
                      Create a new account ?{" "}
                      <span
                        className="text-orange-400"
                        onClick={() => setLogin(false)}
                      >
                        Click Here
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
