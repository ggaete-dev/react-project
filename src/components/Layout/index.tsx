import { ReactNode } from "react";

type Props = {
  children: ReactNode
};

function Layout({ children }: Props) {
  return(
    <div className="flex flex-col mt-20 items-center">
      {children}
    </div>
  );
}

export default Layout;
