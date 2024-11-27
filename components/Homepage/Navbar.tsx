import Image from "next/image";
import React from "react";
import User from "../icons/user";
import { ShoppingBag } from "lucide-react";
import Title from "../icons/title";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3 py-4">
      <Title />
      <ul className="flex gap-3 items-center">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Learn</a>
        </li>
        <li>
          <a href="#">Where to buy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul className="flex gap-3 items-center">
        {/* <Image alt="user" height={50} width={50} src="/icons/user.svg" /> */}
        <User />
        <ShoppingBag />
      </ul>
    </nav>
  );
};

export default Navbar;
