"use client";

import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { navbarList } from "~lib/utils/data";
import { CustomButton } from "~ui/button";
import { Bar, Hand, X } from "~ui/svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  return (
    <nav
      className={twJoin(
        "fixed top-0 z-10 w-full max-w-full",
        "bg-aliceblue/80 py-4 backdrop-blur-md md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5">
        <button onClick={() => setActiveLink("/")}>
          <a className="cursor-pointer" href="/">
            <Hand />
          </a>
        </button>
        <ul className="hidden items-center justify-center space-x-16 text-dark md:flex">
          {navbarList.map((nav) => (
            <li key={nav.id}>
              <a
                className={twJoin(nav.link === activeLink ? "font-semibold" : "font-normal")}
                href={nav.link}
              >
                <button
                  onClick={() => setActiveLink(nav.link)}
                  className={twJoin("px-0.5", nav.link === activeLink ? "bg-yellow-300" : "")}
                >
                  {nav.name}
                </button>
              </a>
            </li>
          ))}
        </ul>
        <a href="#download">
          <CustomButton
            className="hidden bg-primary px-4 py-2 text-white hover:bg-blue-600 md:block"
            label="Download"
            onClick={() => setActiveLink("#download")}
            isDropShadow
          >
            Download
          </CustomButton>
        </a>
        <button
          type="button"
          aria-label="Bar"
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Bar />}
        </button>
      </div>
      {isOpen ? (
        <div className="w-full p-5 md:hidden">
          <ul className="flex flex-col justify-center space-y-3">
            {navbarList.map((nav) => (
              <li key={nav.id} className="border-b-[1px] border-blue-700 py-2">
                <a
                  className={twJoin(nav.link === activeLink ? "font-semibold" : "font-normal")}
                  href={nav.link}
                >
                  <button
                    className={twJoin("px-0.5", nav.link === activeLink ? "bg-yellow-300" : "")}
                    onClick={() => setActiveLink(nav.link)}
                  >
                    {nav.name}
                  </button>
                </a>
              </li>
            ))}
            <li className="w-fit py-2">
              <a href="#download">
                <CustomButton
                  className="bg-primary px-4 py-2 text-white hover:bg-blue-600"
                  label="Download"
                  onClick={() => setActiveLink("#download")}
                  isDropShadow
                >
                  Download
                </CustomButton>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
