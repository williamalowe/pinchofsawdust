"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import { useState } from "react";

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
    <div className="flex py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
    </div>
  );
};

export default Header;
