import React from "react";

const navbar = () => {
  return (
    <nav className=" text-white flex justify-center p-5">
        <div className="font-bold text-5xl hover:scale-[90%] transition-all cursor-pointer">
            <span className="text-purple-700">&lt;</span>
            Pass
            <span className="text-purple-700">wrd /&gt;</span>
        </div>
    </nav>
  );
};

export default navbar;
