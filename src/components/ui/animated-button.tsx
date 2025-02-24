import React from "react";
import Link from "next/link";

interface AnimatedButtonProps {
  text: string;
  href: string;
  bgColor?: string;
  hoverColor?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  href,
  bgColor = "bg-green-700",
  hoverColor = "hover:bg-green-800",
}) => {
  return (
    <Link
      href={href}
      className={`group/button relative inline-flex items-center justify-center overflow-hidden rounded-lg ${bgColor} px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ${hoverColor}`}
    >
      {/* Animated Text */}
      <span className="relative inline-block overflow-hidden">
        {/* Original Text (Moves Up on Hover) */}
        <span className="absolute left-0 top-0 flex space-x-1">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block whitespace-pre transform transition-transform duration-500 group-hover/button:-translate-y-full"
            >
              {char}
            </span>
          ))}
        </span>

        {/* Hover Text (Moves In on Hover) */}
        <span className="absolute left-0 top-0 flex space-x-1">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block translate-y-full transform transition-transform duration-500 group-hover/button:translate-y-0"
            >
              {char}
            </span>
          ))}
        </span>
      </span>

      {/* Arrow Animation */}
      <span className="relative flex size-4 sm:size-[18px] shrink-0 overflow-hidden ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 20 12"
          fill="none"
          className="absolute inset-0 m-auto translate-x-[calc(-100%-20px)] transition-transform duration-500 group-hover/button:translate-x-0"
        >
          <path
            d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 20 12"
          fill="none"
          className="absolute inset-0 m-auto transition-transform duration-500 group-hover/button:translate-x-[calc(100%+20px)]"
        >
          <path
            d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </span>
    </Link>
  );
};

export default AnimatedButton;
