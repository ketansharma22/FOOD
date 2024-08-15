import { useState } from "react";
import "../styling/Navbaar.css";
import { Link } from "react-router-dom";

const Navbaar = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("pressed");
    setClicked(!clicked);
  }
  return (
    <div id="navbar">
      <ul>
        <Link style={{textDecoration:"none",color: "rgb(33, 33, 33)" }} to="/"> Menu</Link>
        <Link to="/"> Orders</Link>
        <Link to="/"> About us</Link>
      </ul>

      <button id="button" onClick={handleClick}>
        Login
      </button>
      {clicked && (
        <div id="clicked">
          <button>login as consumer</button>
          <button>login as seller</button>
        </div>
      )}

      {/* <button id="button" style={{width:100}}>Signup</button>  */}
    </div>
  );
};

export default Navbaar;
