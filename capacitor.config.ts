
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c93fd17035664e7b92843be40fbb6c13',
  appName: 'carsrus-marketplace-mauritius',
  webDir: 'dist',
  server: {
    url: 'https://c93fd170-3566-4e7b-9284-3be40fbb6c13.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
