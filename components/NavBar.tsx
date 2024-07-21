import React from "react";

import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
  return (
    <div className="w-full h-[100px] absolute top-0 flex justify-between items-center px-5">
      <div>
        <a className="text-2xl">Core NextJS App</a>
      </div>
      <div>
        <ThemeToggle />
        <a className="text-xl m-2">Dino</a>
      </div>
    </div>
  );
};

export default NavBar;
