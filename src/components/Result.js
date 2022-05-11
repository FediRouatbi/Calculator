import React, { useContext } from "react";
import "./result.css";
import { KeyboardContext } from "../context/keyboardContext";
const Result = () => {
  const { screen } = useContext(KeyboardContext);
  return <div className="result bg">{screen}</div>;
};

export default Result;
