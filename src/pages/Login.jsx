import React from "react";

const Login = () => {
  return (
    <div className="styled-container-login w-screen h-screen bg-teal-400 flex items-center justify-center">
      <div className="wrapper w-[40%] p-[20px] bg-white mx-auto shadow-lg text-center">
        <h1 className="title text-[24px] font-extralight">SIGN IN</h1>
        <form action="" className="form flex flex-col">
          <input
            type="text"
            className="username border border-teal-400 p-[15px] outline-none my-2"
            placeholder="Username"
          />
          <input
            type="password"
            className="password border border-teal-400 p-[15px] outline-none my-2"
            placeholder="Password"
          />

          {/* <input type="checkbox" name="agreement" id="" /> */}

          {/* <span
            htmlFor="agreement"
            name="agreement"
            className="agreement text-[12px] my-[20px]"
          >
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span> */}

          <button className="button py-[15px] px-[20px] bg-teal-400 text-white font-bold cursor-pointer hover:bg-teal-600">
            SIGN IN
          </button>

          <div className="flex items-center justify-between">
          <span className="text-[12px] my-[20px] underline hover:text-teal-400 hover:font-semibold">FORGOT PASSWORD?</span>
          <span className="text-[12px] my-[20px] underline hover:text-teal-400 hover:font-semibold">CREATE A NEW ACCOUNT</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
