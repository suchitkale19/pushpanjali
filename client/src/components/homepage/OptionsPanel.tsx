import type { ReactNode } from "react";

export default function OptionsPanel() {
  const navigationOptions: string[] = [
    "HOME",
    "INDIAN TORANS",
    "WEDDING DECOR",
    "CAR DECORATION",
    "WEDDING HARS",
    "FLOWERS",
    "COMBOS",
    "OCCASIONS",
    "POOJA",
  ];
  return (
    <div className="flex justify-evenly text-text items-center py-2 border-b-2 border-border ">
      {navigationOptions.map((option: string): ReactNode => {
        return (
          <div className="flex hover:text-black" key={option}>
            <h2 className="text-sm font-semibold">{option}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#2d2a26"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
