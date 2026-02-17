import React from 'react';
import clsx from "clsx";

export default function Link({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
  return (
    <a href={href} className={clsx(
      "text-petal decoration-petal/40 underline-offset-2 transition-all duration-200 hover:text-ink hover:decoration-petal hover:underline",
      className
    )}>
      {children}
    </a>
  );
}
