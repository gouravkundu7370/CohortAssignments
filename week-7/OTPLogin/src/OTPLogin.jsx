import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function OTPLogin() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputs = Array.from({ length: 4 });
  const inputRefs = useRef([]);

  // Function to handle input change
  const handleInputChange = (index, value) => {
    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field if not the last digit
    if (index < otpInputs.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      <h2>OTP Login</h2>
      <form>
        {otpInputs.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </form>
      <button onClick={() => console.log("Login", otp.join(""))}>Login</button>
    </div>
  );
}
