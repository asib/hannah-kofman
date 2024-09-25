import React from "react";
import clsx from "clsx";

import "./tailwind.css";
import "./LayoutDefault.css";



export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx(
      "grid grid-cols-[1fr_min(65ch,100%)_1fr]",
      "*:col-start-2 *:col-end-3",
      "p-8 md:py-8 md:px-0"
    )}>
      {children}
    </div>
  );
}