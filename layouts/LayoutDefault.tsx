import React from "react";

import "./tailwind.css";
import "./LayoutDefault.css";


export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
