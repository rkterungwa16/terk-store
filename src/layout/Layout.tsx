import { FC, ReactNode } from "react";
import Head from "next/head";
import { LayoutContainer } from "./LayoutContainer";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};
const Layout: FC<LayoutProps> = ({ title = "Terk store", children }) => {
  return (
    <>
      <LayoutContainer>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </LayoutContainer>
    </>
  );
};

export default Layout;
