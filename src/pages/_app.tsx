import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ToggleProvider } from "src/context/ToggleProvider";
import AuthLayout from "src/layout/AuthLayout";

function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <ToggleProvider>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </ToggleProvider>
  );
}

export default App;
