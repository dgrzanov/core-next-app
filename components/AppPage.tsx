import React, { FC, ReactNode } from "react";

// Types
type AppPageProps = {
  children: ReactNode;
};
const AppPage: FC<AppPageProps> = (props) => {
  return (
    <div className="mt-[100px] py-5 w-[700px] flex flex-col">
      {props.children}
    </div>
  );
};

export default AppPage;
