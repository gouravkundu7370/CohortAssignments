import React from "react";
import { useState } from "react";
export default function BackgroundChanger() {
  const initialBackground = "#f0f0f0";
  const [backgroundColor, setBackgroundColor] = useState(initialBackground);

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            backgroundColor: "#333",
            overflow: "hidden",
          }}
        >
          <li style={{ float: "left" }}>
            <a
              style={{
                color: "white",
                padding: "14px 16px",
                textDecoration: "none",
              }}
              href="/"
            >
              Home
            </a>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={() => changeBackground("orange")}>Orange</button>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={() => changeBackground("blue")}>Blue</button>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={() => changeBackground("green")}>Green</button>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={() => changeBackground("red")}>Red</button>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={() => changeBackground("purple")}>Purple</button>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={() => changeBackground("yellow")}>Yellow</button>
          </li>
        </ul>
      </nav>
      <div
        style={{
          backgroundColor,
          minHeight: "100vh",
          transition: "background-color 0.5s",
        }}
      >
        <h1>Background Changer</h1>
        <p>Click the buttons in the navbar to change the background color!</p>
      </div>
    </div>
  );
}
