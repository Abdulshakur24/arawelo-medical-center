import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";
import useToggle from "src/hooks/useToggle";
import HomeIcon from "src/icons/HomeIcon";
import HospitalIcon from "src/icons/HospitalIcon";
import ServiceIcon from "src/icons/ServiceIcon";
import BlogIcon from "src/icons/BlogIcon";
import AboutIcon from "src/icons/AboutIcon";
import ContactIcon from "src/icons/ContactIcon";
import ShieldIcon from "src/icons/ShieldIcon";

import useThrottle from "src/hooks/useThrottle";

const links = [
  { id: 1, name: "Home", href: "/", icon: HomeIcon },
  { id: 2, name: "Services", href: "/services", icon: ServiceIcon },
  { id: 3, name: "Blog", href: "/blog", icon: BlogIcon },
  { id: 4, name: "About", href: "/about", icon: AboutIcon },
  { id: 5, name: "Contact", href: "/contact", icon: ContactIcon },
];

function Sidebar() {
  const { toggle, handleSidebar } = useToggle();
  const router = useRouter();

  const handleSidebarThrottled = useThrottle(
    (value?: boolean) => handleSidebar(value),
    150
  );

  console.log(router.asPath);

  return (
    <div
      onMouseEnter={() => handleSidebarThrottled(true)}
      onMouseLeave={() => handleSidebarThrottled(false)}
      className={`${
        toggle.sidebar ? "max-w-[285px]" : "max-w-[65px]"
      } transition-all duration-500 w-full shadow-lg hidden sm:flex flex-col justify-between fixed top-0 left-0 bottom-0 z-40 bg-white/70 backdrop-filter backdrop-blur-xl`}
    >
      <div className="relative flex flex-col ">
        <header className={`h-16 transition-all p-4 flex items-center  `}>
          <Link href="/" className="flex items-center justify-start">
            <HospitalIcon
              className="min-w-[32px] w-8 h-8 fill-purple-500 cursor-pointer"
              // stroke="white"
            />
          </Link>
        </header>
        {links.map(({ id, name, href, icon: Icon }) => (
          <Link
            key={id}
            className={`flex items-center transition-all  duration-300 ${
              toggle.sidebar ? "px-4 py-4" : "px-2 py-2"
            } ${
              router.asPath === href
                ? "bg-purple-500 text-white"
                : "text-purple-500"
            }`}
            href={href}
          >
            <Icon
              strokeWidth="1"
              stroke={`${router.asPath === href ? "white" : "#a855f7"}`}
              className={` ml-[8.5px] min-w-[32px]  w-8 h-8  ${
                router.asPath === href ? "fill-purple-500" : "fill-white"
              }`}
            />
            <AnimatePresence>
              {toggle.sidebar && (
                <motion.div
                  key={1}
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: "0%" }}
                  transition={{ duration: 0.15 }}
                  className={`ml-4 `}
                >
                  <h1 className="font-medium">{name}</h1>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
      <AnimatePresence>
        {toggle.sidebar && (
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: "0%" }}
            transition={{ duration: 0.15 }}
          >
            <Link
              href="/privacy-policy"
              className={`flex items-center transition-all  duration-300 ${
                toggle.sidebar ? "px-4 py-4" : "px-2 py-2"
              } ${
                router.asPath === "/privacy-policy"
                  ? "bg-purple-500 text-white"
                  : "text-purple-500"
              }`}
            >
              <ShieldIcon
                strokeWidth="1"
                stroke={`${
                  router.asPath === "/privacy-policy" ? "white" : "#a855f7"
                }`}
                className={` ml-[8.5px] min-w-[32px]  w-8 h-8  ${
                  router.asPath === "/privacy-policy"
                    ? "fill-purple-500"
                    : "fill-white"
                }`}
              />
              <AnimatePresence>
                {toggle.sidebar && (
                  <motion.div
                    key={1}
                    initial={{ opacity: 0, width: "0%" }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: "0%" }}
                    transition={{ duration: 0.15 }}
                    className={`ml-4 `}
                  >
                    <h1 className="font-medium">Policy</h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
