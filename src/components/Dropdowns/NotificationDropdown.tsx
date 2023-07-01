import React from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import useToggle from "src/hooks/useToggle";
import NotificationIcon from "src/icons/NotificationIcon";
import { motion, AnimatePresence } from "framer-motion";

function NotificationDropdown() {
  const { toggle, handleNofitication } = useToggle();

  const ref = useOnClickOutside(() => {
    if (toggle.navbar.notification) {
      handleNofitication();
    }
  });

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => handleNofitication()}
        className="flex items-center justify-center w-full px-4 py-2 text-xs font-bold uppercase focus:outline-none"
      >
        <NotificationIcon
          // fill="none"
          stroke="black"
          strokeWidth="0"
          className="w-[18px] h-[18px]  cursor-pointer"
        />
      </button>
      <AnimatePresence mode="wait">
        {toggle.navbar.notification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-[-50px] top-[50px] w-[255px] h-[260px] right-0 backdrop-filter backdrop-blur-2xl z-50"
          >
            <div className="border-[1px] border-gray-200">
              <div className="flex flex-row flex-wrap">
                <div className="w-full text-gray-900">
                  <div className="flex items-center justify-start p-2">
                    <div className="ml-2">
                      <div className="text-sm font-bold">5 new sales</div>
                      <div className="text-xs">
                        Atque quaerat libero maiores vel.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-900">
                  <div className="flex items-center justify-start p-2">
                    <div className="ml-2">
                      <div className="text-sm font-bold">
                        $3.000 in average profits
                      </div>
                      <div className="text-xs">Aut aut ullam eum possimus.</div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-900">
                  <div className="flex items-center justify-start p-2">
                    <div className="ml-2">
                      <div className="text-sm font-bold">200 new tweets</div>
                      <div className="text-xs">
                        Fugiat praesentium soluta amet non.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-900">
                  <div className="flex items-center justify-start p-2">
                    <div className="ml-2">
                      <div className="text-sm font-bold">2 new items</div>
                      <div className="text-xs">
                        Fugit eaque molestias et aut.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-900">
                  <div className="flex items-center justify-start p-2">
                    <div className="ml-2">
                      <div className="text-sm font-bold">
                        51 registered users
                      </div>
                      <div className="text-xs">
                        Labore aut voluptas molestias illo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NotificationDropdown;
