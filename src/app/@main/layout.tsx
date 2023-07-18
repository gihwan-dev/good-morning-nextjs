import React from "react";
import RecoilProvider from "@/lib/recoil.provider";

const MainRootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <RecoilProvider>{children}</RecoilProvider>;
};

export default MainRootLayout;
