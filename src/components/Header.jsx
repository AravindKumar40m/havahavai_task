import React from "react";
import LOGO from "../assets/image1.jpeg";

const Header = () => {
  return (
    <header className=" px-12 py-2 border-b border-gray-200 flex gap-6 items-center justify-end">
      <p className="relative right-[1290px] text-2xl font-bold">hava havai</p>

      <img src={LOGO} className="size-10 cursor-pointer rounded-3xl" />
    </header>
  );
};

export default Header;
