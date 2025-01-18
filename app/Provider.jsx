import React from "react";
import Header from "./_components/Header";

function Provider({ children }) {
  return (
    <div className="bg-red-500 mt-28">
      <Header />
      {children}
    </div>
  );
}

export default Provider;
