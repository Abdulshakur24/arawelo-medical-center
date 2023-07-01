export interface ToggleContextType {
  toggle: {
    navbar: {
      myapp: boolean;
      setting: boolean;
      profile: boolean;
      message: boolean;
      notification: boolean;
    };
    sidebar: boolean;
  };
  handleMyApp: (value?: boolean) => void;
  handleSetting: (value?: boolean) => void;
  handleProfile: (value?: boolean) => void;
  handleMessage: (value?: boolean) => void;
  handleNofitication: (value?: boolean) => void;
  handleSidebar: (value?: boolean) => void;
}
