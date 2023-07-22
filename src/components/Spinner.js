import React from "react";
import loading from './loading.gif';

const Spinner =()=> {
  return (
    <div className="text-center">
      <img className="my-3"
        style={{ height: "20px", width: "20px" }}
        src={loading}
        alt="loading"
      ></img>
    </div>
  );
}

export default Spinner
 