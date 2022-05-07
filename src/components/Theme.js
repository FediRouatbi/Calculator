import { FaPalette } from "react-icons/fa";
import "./theme.css";
const Theme = () => {
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
          <div className="animation"></div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
