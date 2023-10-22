import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="home">
      <title> LandingPage </title>
      <meta name="description" content="Counter App" />
      <h3> My Counter App </h3>
      <br></br>
      <p> An Altschool SOE Examination </p>
      <div className="start-btn">
        <Link to="/counter">Start Counter</Link>
      </div>
    </div>
  );
};
export default LandingPage;
