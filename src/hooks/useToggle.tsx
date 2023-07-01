import { useContext } from "react";
import { ToggleContext } from "src/context/ToggleProvider";

function useToggle() {
  const {
    toggle,
    handleSetting,
    handleMyApp,
    handleNofitication,
    handleProfile,
    handleMessage,
    handleSidebar,
  } = useContext(ToggleContext);
  return {
    toggle,
    handleMyApp,
    handleNofitication,
    handleProfile,
    handleMessage,
    handleSetting,
    handleSidebar,
  };
}

export default useToggle;
