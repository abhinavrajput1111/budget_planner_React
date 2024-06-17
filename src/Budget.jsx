import React, { useContext } from "react";
import { myContext } from "./App";



function Budget() {

    const { budget, remaining, spend } = useContext(myContext);

    return (
      <>
        <div className="w-full bg-fuchsia-800 py-2 mb-20">
          <h1 className="text-5xl font-mono m-5 mx-10 text-white">
            My Budget Planner
          </h1>
        </div>
        <div className="flex justify-between px-10 mx-10 my-5 text-2xl ">
          <div className="bg-fuchsia-800 px-12 py-2 rounded-lg text-white font-semibold">
            <h2>Budget: {budget}</h2>
          </div>
          <div className="bg-fuchsia-800 px-12 py-2 rounded-lg text-white font-semibold">
            <h2>Remaining: {remaining}</h2>
          </div>
          <div className="bg-fuchsia-800 px-12 py-2 rounded-lg text-white font-semibold">
            <h2>Spend so far: {spend}</h2>
          </div>
        </div>
      </>
    );
}

export default Budget;
