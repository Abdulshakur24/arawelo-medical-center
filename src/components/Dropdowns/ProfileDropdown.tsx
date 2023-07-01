import React from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import useToggle from "src/hooks/useToggle";
import SettingIcon from "src/icons/SettingIcon";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import InboxIcon from "src/icons/InboxIcon";
import MessageIcon from "src/icons/MessageIcon";
import ProfileIcon from "src/icons/ProfileIcon";
import ExitIcon from "src/icons/ExitIcon";
import Image from "next/image";

function NotificationDropdown() {
  const { toggle, handleProfile } = useToggle();

  const ref = useOnClickOutside(() => {
    if (toggle.navbar.profile) {
      handleProfile();
    }
  });

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => handleProfile()}
        className="flex items-center justify-center w-full px-4 py-2 text-xs font-bold uppercase focus:outline-none"
      >
        <Image
          src={"/images/faces/m1.png"}
          alt="profile"
          width={"100"}
          height="100"
          className="w-[32px] h-[32px] fill-blue-500 rounded-full"
        />
      </button>
      <AnimatePresence mode="wait">
        {toggle.navbar.profile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-[-50px] top-[57px] w-[255px] h-[160px] right-0 backdrop-filter backdrop-blur-2xl z-50"
          >
            <div className="border-[1px] border-gray-200">
              <ul className="list-none">
                <li>
                  <Link
                    className="flex flex-row items-center justify-start w-full h-10 px-2 text-gray-900"
                    href="/"
                  >
                    <InboxIcon className="stroke-current w-[18px] h-[18px]" />
                    <span className="mx-2">Inbox</span>
                    <span className="uppercase font-bold inline-flex text-center p-0 leading-none text-xs h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white ml-auto">
                      2
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-row items-center justify-start w-full h-10 px-2 text-gray-900  "
                    href="/"
                  >
                    <MessageIcon className="stroke-current w-[18px] h-[18px]" />
                    <span className="mx-2">Messages</span>
                    <span className="uppercase font-bold inline-flex text-center p-0 leading-none text-xs h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white ml-auto">
                      3
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-row items-center justify-start w-full h-10 px-2 text-gray-900  "
                    href="/"
                  >
                    <ProfileIcon className="stroke-current w-[18px] h-[18px]" />
                    <span className="mx-2">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-row items-center justify-start w-full h-10 px-2 text-gray-900  "
                    href="/"
                  >
                    <ExitIcon className="stroke-current w-[18px] h-[18px]" />

                    <span className="mx-2">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NotificationDropdown;
