import React from "react";
import "./keyboard.css";
const Keyboard = () => {
  return (
    <div className="grid">
      <div className="vals">7</div>
      <div className="vals">8</div>
      <div className="vals">9</div>
      <div className="vals del">DEL</div>
      <div className="vals">4</div>
      <div className="vals">5</div>
      <div className="vals">6</div>
      <div className="vals">+</div>
      <div className="vals">1</div>
      <div className="vals">2</div>
      <div className="vals">3</div>
      <div className="vals">-</div>
      <div className="vals">.</div>
      <div className="vals">0</div>
      <div className="vals">/</div>
      <div className="vals">x</div>
      <div className="vals reset">RESET</div>
      <div className="vals equal">=</div>
    </div>
  );
};

export default Keyboard;
