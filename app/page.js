"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState();
  const [decs, setdecs] = useState();
  const [mainTAsk, setmainTAsk] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, decs);
    // console.log(mainTAsk);
    setmainTAsk([...mainTAsk, { title, decs }]);
    setdecs("");
    settitle("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTAsk];
    copyTask.splice(i, 1);
    setmainTAsk(copyTask);
  };
  let renderTask = <h2>No Task Available</h2>;

  if (mainTAsk.length > 0) {
    renderTask = mainTAsk.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 items-center w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-semibold">{t.decs}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 px-4  py-2 text-white rounded"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-blue-600 text-2xl p-5 text-center font-bold">
        Jitu's Todo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-2 border-zinc-800 text-2xl m-8 px-4 py-2"
          placeholder="Enter TITle Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-2 border-zinc-800 text-2xl m-8 px-4 py-2"
          placeholder="Enter Task Here"
          value={decs}
          onChange={(e) => {
            setdecs(e.target.value);
          }}
        />
        <button className="bg-zinc-900 text-white text-2xl py-2 px-4 font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
