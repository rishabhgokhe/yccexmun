import React from 'react';
import Link from 'next/link';

export const hoverUnderlineGradient = () => {
  return  "hover:underline-gradient";
  
};

export const hoverButtonGradient = () => {
  return "custom-underline-gradient";
  
};

export function NavigationMenu({ children }) {
  return <div className="navigation-menu list-none m-0 p-0">{children}</div>; 
}

export function NavigationMenuItem({ children }) {
  return <div className="navigation-menu-item list-none m-0 p-0">{children}</div>; 
}

export function NavigationMenuLink({ children, className, href = "" }) {
  return (
    <Link href={href} className={`navigation-menu-link ${className} px-4 py-2 rounded-md no-underline transition-colors duration-300`}>
      {children}
    </Link>
  );
}