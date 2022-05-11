import React, { useContext } from "react";
import "./keyboard.css";
import { KeyboardContext } from "../context/keyboardContext";

const Keyboard = () => {
  const keyboard = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
    "RESET",
    "=",
  ];
  const { getKey, theme } = useContext(KeyboardContext);
  let colors = "";
  if (theme === 2) colors = "theme2";
  if (theme === 3) colors = "theme3";

  return (
    <div className="grid bg">
      {keyboard.map((el, i) => {
        let special = "";
        if (i === 3) special = "del ";
        if (i === 16) special = "reset ";
        if (i === 17) special = "equal ";
        return (
          <div
            key={i}
            className={`vals ${colors}   ${special}`}
            onClick={(e) => getKey(e.target.innerText)}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
