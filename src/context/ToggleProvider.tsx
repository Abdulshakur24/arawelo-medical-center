import React, { useState, createContext } from "react";
import type { ReactNode } from "react";
import { ToggleContextType } from "src/types";

export const ToggleContext = createContext({} as ToggleContextType);

function ToggleProvider({ children }: { children: ReactNode }) {
  const [toggle, setToggle] = useState({
    navbar: {
      myapp: false,
      setting: false,
      profile: false,
      message: false,
      notification: false,
    },
    sidebar: false,
  });

  const handleMyApp = (value: boolean = false) => {
    setToggle((prev) => ({
      ...prev,
      navbar: { ...prev.navbar, myapp: value ? value : !prev.navbar.myapp },
    }));
  };

  const handleSetting = (value: boolean = false) => {
    setToggle((prev) => ({
      ...prev,
      navbar: { ...prev.navbar, setting: value ? value : !prev.navbar.setting },
    }));
  };

  const handleProfile = (value: boolean = false) => {
    setToggle((prev) => ({
      ...prev,
      navbar: { ...prev.navbar, profile: value ? value : !prev.navbar.profile },
    }));
  };

  const handleMessage = (value: boolean = false) => {
    setToggle((prev) => ({
      ...prev,
      navbar: { ...prev.navbar, message: value ? value : !prev.navbar.message },
    }));
  };

  const handleNofitication = (value: boolean = false) => {
    setToggle((prev) => ({
      ...prev,
      navbar: {
        ...prev.navbar,
        notification: value ? value : !prev.navbar.notification,
      },
    }));
  };

  const handleSidebar = (value: boolean = false) => {
    setToggle((prev) => ({
      ...prev,
      sidebar: value ? value : !prev.sidebar,
    }));
  };

  return (
    <ToggleContext.Provider
      value={{
        toggle,
        handleMyApp,
        handleSetting,
        handleProfile,
        handleMessage,
        handleNofitication,
        handleSidebar,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleProvider };
