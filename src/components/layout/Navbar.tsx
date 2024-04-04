"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import Logo from "../Logo";
import Link from "next/link";
import ChipTabs from "./tabs";

export const Navbar = () => {
  const LINKS = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About us",
      link: "/about",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Why us",
      link: "/why-us",
    },
    {
      title: "Contact us",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="grid place-content-center w-full">
        <Logo />
      </div>

      <nav className="sticky z-50 top-3 w-full max-w-7xl mx-auto bg-primary/80 backdrop-blur-md border border-white/10 h-14 rounded-xl flex items-center justify-center shadow-xl shadow-black/10">
        {/* <ChipTabs /> */}
        <ul className="flex gap-10 mx-auto text-background">
          {LINKS.map(({ title, link }) => (
            <li key={title}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
        {/* <Button
          variant="primary"
          className="right-3 absolute uppercase font-bold tracking-wide"
        >
          Enquire Now
        </Button> */}
        <button
          className="absolute group/btn flex space-x-2 items-center justify-center px-4 text-black rounded-md h-10 right-2 font-medium shadow-input bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <span className="text-background font-bold text-sm uppercase tracking-wide">
            Enquire Now
          </span>
          <BottomGradient />
        </button>
      </nav>
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </>
  );
};
