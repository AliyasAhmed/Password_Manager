import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white flex justify-center p-5">
        <div className="font-bold text-5xl hover:scale-[90%] transition-all cursor-pointer">
            <span className="text-[#2516c7b7]">&lt;</span>
            Pass
            <span className="text-[#2516c7b7]">wrd /&gt;</span>
        </div>
    </nav>
  );
};

export default Navbar;
