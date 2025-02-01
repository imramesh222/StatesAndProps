import React from "react";

const ListComp = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Hello</h1>
      <ul className="list-disc list-outside space-y-2">
      {list.map((fruit,index)=>(
        <li key={index}  className="text-lg text-gray-700 bg-white p-2 rounded-lg shadow-sm">{fruit}</li>
      ))}
    </ul>
      <ul className="list-disc list-inside space-y-2">
        {list.map((fruit, index) => (
          <li
            key={index}
            className="text-lg text-gray-700 bg-white p-2 rounded-lg shadow-sm"
          >
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListComp;
