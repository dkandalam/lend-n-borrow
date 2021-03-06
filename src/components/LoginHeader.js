import React from "react";
import { useHistory } from "react-router-dom";
const LoginHeader = (props) => {
  const history = useHistory();
  return (
    <div className="mt-4 mx-2 leading-1">
      <div className="float-left mx-2 p-1 font-medium text-3xl">
        Lend & Borrow
      </div>
      <div className="float-right flex mx-2 my-1">
        <button
          className="mx-2 text-green-400 light"
          onClick={() => {
            history.push("/login");
          }}
        >
          Log in
        </button>
        <button
          className="mx-2 rounded border px-2 py-1 bg-green-400 text-white light shadow shadow-inner"
          onClick={() => {
            history.push("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
export default LoginHeader;
