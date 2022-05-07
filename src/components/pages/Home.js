import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navTo = useNavigate();
  return (
    <div className="home">
      <p className="welcome">
        <p className="big">Welcome to web page</p>
        <p className="small">simple web page</p>
      </p>

      <button onClick={() => navTo("/calculator")} className="btn">
        Try it now
      </button>
    </div>
  );
};

export default Home;
