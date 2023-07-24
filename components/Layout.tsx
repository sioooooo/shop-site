import { ReactNode } from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="">
      <Navbar />
      <div className="mt-4 ">{children}</div>
    </div>
  );
};
