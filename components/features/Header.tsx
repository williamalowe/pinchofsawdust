"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import { useState } from "react";

const links = [
    {
        name: "Explore",
        ref: "/explore",
        authReq: false
    },
    {
        name: "About",
        ref: "/about"
,        authReq: false
    },
    {
        name: "Discover",
        ref: "/discover",
        authReq: true
    },
    {
        name: "Requests",
        ref: "/requests",
        authReq: true
    },
    {
        name: "Guides",
        ref: "/guides",
        authReq: true
    },  
    {   
        name: "Community",
        ref: "/community",
        authReq: true
    },
]

const Header = () => {
    // todo: move to usecontext for auth state
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? (
    <div className="flex py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
    </div>
  ) : (
    <div className="flex items-center py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex items-center ml-auto">
      {
        links.map((link) => {
            if (!link.authReq) {
                return (
                    <Link key={link.name} href={link.ref} className="ml-8 text-sm font-medium uppercase text-black/60 hover:text-black hover:scale-105 transition-all">
                        {link.name}
                    </Link>
                )
            }
        })
      }
      <Link href={'/signin'}>
        <button className="cursor-pointer ml-8 px-4 py-2 text-sm font-medium text-white bg-(--color-primary) rounded hover:scale-105 transition-all">
          Sign In
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Header;
