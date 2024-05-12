import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={`w-full px-8 lg:px-16 flex flex-col items-center ${className}`}
    >
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
}
