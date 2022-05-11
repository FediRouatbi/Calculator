import { FaPalette } from "react-icons/fa";
import "./theme.css";
import { useContext } from "react";
import { KeyboardContext } from "../context/keyboardContext";
const Theme = () => {
  const { toogle } = useContext(KeyboardContext);
  return (
    <div className="theme">
      <div className="name">calc</div>
      <div className="themes">
        <div className="icon">
          <FaPalette />
        </div>
        <div className="toogle">
          <div className="nums">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="animation bg">
            <button onClick={toogle} className="position"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
