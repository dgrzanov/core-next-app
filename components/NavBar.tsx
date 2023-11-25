import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[100px] bg-slate-800 absolute top-0 flex justify-between items-center px-5">
      <div>
        <a className="text-2xl">Core NextJS App</a>
      </div>
      <div>
        <a className="text-xl">Dino</a>
      </div>
    </div>
  );
};

export default NavBar;
