import React from "react";

function Header({ toggleSidebar }) {
  return (
    <div className="h-[50px] flex items-center p-2 border md:hidden bg-black text-white">
      <i className="fa-solid fa-bars cursor-pointer" onClick={toggleSidebar}></i>
      <img
        src="https://i.pinimg.com/736x/d6/10/d9/d610d9d365f203d7eda5a1cd752a8682.jpg"
        alt="Logo"
        width="150px"
        className="h-[46px] ml-2"
      />
    </div>
  );
}

export default Header;
