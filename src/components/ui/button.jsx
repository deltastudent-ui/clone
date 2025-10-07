import React from "react";
import clsx from "clsx";

export function Button({ 
  children, 
  className = "", 
  variant = "default", 
  ...props 
}) {
  const base = "inline-flex items-center justify-center font-medium rounded-full transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg";

  const variants = {
    default: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 px-6 py-3",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2",
    ghost: "text-gray-700 hover:bg-gray-100 px-3 py-2",
  };

  return (
    <button 
      className={clsx(base, variants[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
}
