import React from "react";

function Counts({ one, two }) {
  return (
    <div className="mt-3">
      <p className="dark:text-white">
        Nothing has changed here but I've now rendered
      </p>
      <p>{one}</p>
      <p>{two}</p>
    </div>
  );
}

export default React.memo(Counts);
