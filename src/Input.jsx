import React, { useContext, useState } from "react";
import { myContext } from "./App";

function Input() {
  const { addExpense } = useContext(myContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState();

  return (
    <div className="w-full">
      <div className="w-full">
        <h2 className="text-4xl font-mono m-10 text-center">Add Expences</h2>

        <div className="flex justify-center  p-5 mx-10">
                  <form method="post" onSubmit={(e) => {
                      e.preventDefault();
                      addExpense(e, name, cost)
                  }} className="w-full flex justify-center">
            <input
              type="text"
              placeholder="Name"
              className=" px-5 py-2 border-2 w-[40%]"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
            <input
              type="number"
              placeholder="Cost"
              className="px-5 py-2 border-2 w-[40%]"
              value={cost}
              onChange={(e) => {
                setCost(e.currentTarget.value);
              }}
            />
            <button
              type="submit"
              className="w-[10%] text-white font-bold bg-fuchsia-800 hover:bg-fuchsia-600 py-2"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
