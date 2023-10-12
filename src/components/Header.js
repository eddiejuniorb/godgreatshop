import React, { useState } from "react";
import {
  BasketIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
  MagnifyIcon,
} from "../Icons";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);

  const [miniOpen, setminiOpen] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setmenuOpen(!menuOpen);
  };

  const handleMiniOpen = (e) => {
    setminiOpen(!miniOpen);
  };

  return (
    <div className="container mx-auto max-w-6xl px-5 w-full">
      {miniOpen && <MiniCart close={handleMiniOpen} />}
      <div className="py-6">
        <div className="flex items-center justify-between">
          {/* Shop Logo */}
          <div className="flex gap-32 items-center">
            <div>
              <Link
                to="/"
                className="font-bold font-sans2 text-2xl hidden sm:block"
              >
                greatshop.
              </Link>
              <Link to="/" className="font-bold font-sans2 sm:hidden text-3xl">
                gt.
              </Link>
            </div>

            {/* Shop Navigation */}
            <ul className="gap-12 items-center hidden md:flex">
              <li>
                <Link to="/shop" className="font-sansM">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="" className="font-sansM">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Actions */}

          <div className="flex items-center gap-5 sm:gap-8">
            <div className="relative">
              <input
                type="text"
                className="w-24 text-sm pl-6"
                placeholder="search"
              />
              <button className="absolute left-0 top-1">
                <MagnifyIcon />
              </button>
            </div>
            <button
              onClick={() => {
                handleMiniOpen();
              }}
            >
              <BasketIcon />
            </button>
            <div className="hidden md:block">
              <Link to="/login">
                <UserIcon />
              </Link>
            </div>
            <div className="cursor-pointer md:hidden">
              {menuOpen ? (
                <div onClick={handleMenuToggle}>
                  <CloseIcon />
                </div>
              ) : (
                <div onClick={handleMenuToggle}>
                  <MenuIcon />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
