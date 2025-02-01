import React from "react";

const Welcome2 = (props) => {
  return (
    <>
      <div className="flex">
        <h1 className="text-black p-2 bg-amber-500 rounded-2xl">Welcome, </h1>
        <h1 className=" text-2xl text-bold text-red-800 ">{props.name}</h1>
      </div>
    </>
  );
};

export default Welcome2;
