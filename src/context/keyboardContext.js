import React, { createContext, useState } from "react";
import { evaluate } from "mathjs";
export const KeyboardContext = createContext();
export const KeyboardProvider = ({ children }) => {
  const [screen, setScreen] = useState("");
  const [theme, setTheme] = useState(1);
  const body = document.querySelector("body");
  const themeSelector = document.querySelector(".position");
  [body, themeSelector].forEach((el) => {
    if (!el) return;
    if (theme === 1) {
      el.style.backgroundColor = "  hsl(224, 36%, 15%)";
      el.style.color = "hsl(221, 14%, 31%)";
    }
    if (theme === 2) {
      el.style.backgroundColor = "hsl(0, 0%, 90%)";
      el.style.color = "hsl(221, 14%, 31%)";
    }
    if (theme === 3) {
      el.style.backgroundColor = "hsl(268, 71%, 12%)";
      el.style.color = "hsl(52, 100%, 62%)";
    }
  });
  const calculatorBackground = document.querySelectorAll(".bg");
  calculatorBackground.forEach((el) => {
    if (theme === 1) el.style.backgroundColor = "hsl(223, 31%, 20%)";
    if (theme === 2) el.style.backgroundColor = "hsl(0, 5%, 81%)";
    if (theme === 3) el.style.backgroundColor = "hsl(268, 75%, 9%)";
  });

  const getKey = (key) => {
    if (!screen && (isNaN(key) || key === "0")) return setScreen("");
    //reset all
    if (key === "RESET") return setScreen("");
    //delete last key
    if (key === "DEL") return setScreen((prev) => prev.slice(0, -1));
    //print result
    if (key === "=")
      return setScreen((prev) => {
        if (prev === "") return "";
        return (
          Number.isInteger(evaluate(prev))
            ? evaluate(prev)
            : evaluate(prev).toFixed(2)
        ).toString();
      });

    setScreen((prev) => {
      console.log(prev.slice(-1));
      if (isNaN(prev.slice(-1)) && isNaN(key)) return prev.slice(0, -1) + key;

      return prev.concat(key);
    });
  };

  const toogle = (e) => {
    e.target.classList.remove(`pos${theme}`);
    console.log(theme);
    setTheme((prev) => prev + 1);
    if (theme === 3) setTheme(1);
    e.target.classList.add(`pos${theme + 1}`);
  };
  return (
    <KeyboardContext.Provider value={{ getKey, screen, toogle, theme }}>
      {children}
    </KeyboardContext.Provider>
  );
};
