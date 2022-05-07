import { FaRegFrown } from "react-icons/fa";
import "./notfound.css";
const NotFound = () => {
  return (
    <div className="error">
      <FaRegFrown size={200} />
      <p className="num">404</p>
      <p className="notfound"> Not Found</p>
    </div>
  );
};

export default NotFound;
