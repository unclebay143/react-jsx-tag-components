import React from "react";
import ThemeContext from "../../context/ThemeContext";
import ColorModeSwitch from "../colorSwitch/ColorModeSwitch";
const Navbar = () => {
  const { currentTheme } = React.useContext(ThemeContext)
  return (
    <nav className={`${currentTheme === 'light' ? 'py-5 bg-gray-800 text-white' : 'py-5 bg-teal-500 text-black'}`}>
      <section className='flex justify-between items-center px-6 md:w-4/6 mx-auto'>
        <h1 className='text-center md:text-left text-2xl xl:text-3xl text-gray-50 font-bold'>
          RJXTC 🚀
        </h1>
        <ColorModeSwitch/>
      </section>
    </nav>
  );
};

export default Navbar;
