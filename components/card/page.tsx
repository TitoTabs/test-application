import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

// This component is a simple card container that centers its content and applies some styling.
const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`container  bg-white shadow-lg rounded-2xl p-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
