import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center gap-16 max-lg:hidden items-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block">
            <img
              className="cursor-pointer"
              src={hamburger}
              alt="toggle"
              width={25}
              height={25}
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {menuOpen && (
              <ul className="absolute top-full right-0 w-56 flex flex-col items-center rounded-lg bg-slate-400 gap-4 p-4">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat text-lg text-white hover:text-gray-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
