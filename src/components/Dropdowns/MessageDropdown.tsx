import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MessageIcon from "src/icons/MessageIcon";
import useToggle from "src/hooks/useToggle";
import useClickOnOutSide from "src/hooks/useOnClickOutside";

function MessageDropdown() {
  const { toggle, handleMessage } = useToggle();

  const ref = useClickOnOutSide(() => {
    if (toggle.navbar.message) {
      handleMessage();
    }
  });

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => handleMessage()}
        className="flex items-center justify-center w-full px-4 py-2 text-xs font-bold uppercase focus:outline-none"
      >
        <MessageIcon
          stroke="#3b82f6"
          className="min-w-[32px] w-[18px] h-[18px]  cursor-pointer"
        />
      </button>
      <AnimatePresence mode="wait">
        {toggle.navbar.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-[-50px] top-[50px] w-[255px] h-[274px] right-0 backdrop-filter backdrop-blur-2xl z-50"
          >
            <div className="border-[1px] border-gray-200">
              <h1 className="text-gray-900 w-full p-2 text-xs font-bold tracking-wider uppercase">
                PROJECT STATUS
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-col p-2 text-gray-900 ">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">
                      Mobile app development
                    </div>
                    <div className="text-xs whitespace-nowrap">33%</div>
                  </div>
                  <div className="relative flex flex-row w-full text-center text-xs items-center h-1">
                    <div
                      className="top-0 left-0 h-1 w-full bg-green-500"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 text-gray-900 ">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">
                      Deploy github project
                    </div>
                    <div className="text-xs whitespace-nowrap">50%</div>
                  </div>
                  <div className="relative flex flex-row w-full text-center text-xs items-center h-1">
                    <div
                      className="top-0 left-0 h-1 w-full bg-yellow-500"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 text-gray-900 ">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">
                      Customer development
                    </div>
                    <div className="text-xs whitespace-nowrap">66%</div>
                  </div>
                  <div className="relative flex flex-row w-full text-center text-xs items-center h-1">
                    <div
                      className="top-0 left-0 h-1 w-full bg-red-500"
                      style={{ width: "66%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 text-gray-900 ">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Database backup</div>
                    <div className="text-xs whitespace-nowrap">25%</div>
                  </div>
                  <div className="relative flex flex-row w-full text-center text-xs items-center h-1">
                    <div
                      className="top-0 left-0 h-1 w-full bg-indigo-500"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 text-gray-900 ">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Release version 1.4</div>
                    <div className="text-xs whitespace-nowrap">80%</div>
                  </div>
                  <div className="relative flex flex-row w-full text-center text-xs items-center h-1">
                    <div
                      className="top-0 left-0 h-1 w-full bg-blue-500"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MessageDropdown;
