import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import cat from "../../assets/art-attack-GxDoA27cKVs-unsplash.jpg";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="first">
        <div className="first-left">
          <h1>Powerful Telecom Insights at Your Fingertips</h1>
          <p>
            Discover real-time customer analytics and take data-driven actions
            to reduce churn.
          </p>
          {/* <button onClick={loginWithRedirect}>Get Started</button> */}
        </div>
        <img id="cat" src={cat} alt="Cat in the window"/>
      </div>
      <div className="hero"></div>
      <div
        className="metrics"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div>
          <h2>1.2M+</h2>
          <p>Customers</p>
        </div>
        <div>
          <h2>#1</h2>
          <p>Telecom Analytics</p>
        </div>
        <div>
          <h2>32%</h2>
          <p>Churn Reduction</p>
        </div>
        <div>
          <h2>20+</h2>
          <p>Countries</p>
        </div>
      </div>

      <div className="links"></div>
    </div>
  );
};

export default Home;
