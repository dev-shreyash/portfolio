import React, { useState, useEffect } from "react";
import "./zigZag.scss"; // Import your CSS file

const ZigZagLine: React.FC = () => {
  const [angle, setAngle] = useState(70); // Initial angle set to 70 degrees
  const [increasing, setIncreasing] = useState(true); // State to determine direction

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => {
        if (prevAngle >= 180) {
          setIncreasing(false); // Start decreasing when angle reaches 180
        } else if (prevAngle <= 90) {
          setIncreasing(true); // Start increasing when angle reaches 70
        }
        return increasing ? prevAngle + 1 : prevAngle - 1; // Increment or decrement angle by 1
      });
    }, 50); // Change angle every 50 milliseconds for smooth animation

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [increasing]);

  return <div className="zig-zag-line" style={{ "--a": `${angle}deg` } as React.CSSProperties}></div>;
};

export default ZigZagLine;
