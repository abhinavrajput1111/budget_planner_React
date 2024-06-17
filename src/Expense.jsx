import React from "react";

function Expense({ name, cost, handleDelete, index }) {
  return (
    <div className="flex justify-between items-center mx-20 px-10 my-3 bg-slate-100 p-5">
      <p>{name}</p>
      <p>{cost}</p>
      <button
        className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded-md"
        onClick={(e) => {
          handleDelete(index);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Expense;
