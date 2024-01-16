import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessCard from "./BusinessCard";

function App() {
  const cardData = {
    name: "GK",
    description: "Web Dev",
    interests: ["React", "JS"],
    linkedin: "https://www.google.com",
    twitter: "https://www.google.com",
    otherSocialMedia: {
      url: "https://www.example.com",
      label: "Example",
    },
  };

  return (
    <>
      <h1>My Business Card App</h1>
      <BusinessCard {...cardData} />
    </>
  );
}

export default App;
