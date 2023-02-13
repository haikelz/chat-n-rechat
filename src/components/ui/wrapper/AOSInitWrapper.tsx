"use client";

import Aos from "aos";
import { useEffect } from "react";
import { ChildrenProps } from "~types";

const AOSInitWrapper = ({ children }: ChildrenProps) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>{children}</>;
};

export default AOSInitWrapper;
