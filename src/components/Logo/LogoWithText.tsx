import * as React from "react";

export default function LogoWithText() {
  return (
    <div
      onClick={() => (window.location.href = "/")}
      className="flex flex-row justify-center align-top mt-1"
      style={{ cursor: "pointer" }}
    >
      <div className="flex justify-center align-top items-top">
        <img
            width={42}
            height={42}
            src="/img/cognicraft.png"
            alt="Cognicraft LogoWithText"
        />
      </div>

      <div className="flex flex-row ml-2 justify-center align-center">
        <p
          className="text-transparent bg-clip-text text-3xl font-bold
  bg-gradient-to-r from-blue-700 to-slate-900 dark:from-cyan-500 dark:to-blue-500	"
        >
          Cognicraft
        </p>{" "}
        {/*<p*/}
        {/*  className="text-transparent bg-clip-text text-3xl font-bold to-slate-900"*/}
        {/*></p>*/}
      </div>
    </div>
  );
}
