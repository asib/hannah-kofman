import React from 'react';
import clsx from "clsx";

export default function Link({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
  return (
    <a href={href} className={clsx(
      "cursor-pointer hover:underline hover:decoration-pink-500 decoration-2",
      className
    )}>
      {children}
    </a>
  );
}