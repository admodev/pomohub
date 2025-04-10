import React from "react";
import { ContentContainerComponent } from "../../shared";

const Onboarding: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <ContentContainerComponent injectedStyles="w-24/32 h-25 mx-auto mt-5">
        <h1 className="text-4xl capitalize text-center font-bold text-shadow-sm">
          Welcome to PomoHub!
        </h1>
      </ContentContainerComponent>
    </div>
  );
};

export default Onboarding;
