"use client";
import React, { useEffect, useRef, useState } from "react";
import "./cursor.scss"; // Ensure the SCSS file is correctly created and imported

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursor2Ref = useRef<HTMLDivElement | null>(null);
  const cursor3Ref = useRef<HTMLDivElement | null>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current && cursor2Ref.current && cursor3Ref.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
        cursor2Ref.current.style.left = `${x}px`;
        cursor2Ref.current.style.top = `${y}px`;
        cursor3Ref.current.style.left = `${x}px`;
        cursor3Ref.current.style.top = `${y}px`;
      }
    };

    const handleMouseOverProject = () => setIsHidden(true);
    const handleMouseOutProject = () => setIsHidden(false);

    document.body.addEventListener("mousemove", handleMouseMove);

    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOverProject);
      item.addEventListener("mouseout", handleMouseOutProject);
    });

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      projectItems.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOverProject);
        item.removeEventListener("mouseout", handleMouseOutProject);
      });
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        className={`cursor ${isHidden ? "hidden" : ""}`}
      />
      <div
        id="cursor2"
        ref={cursor2Ref}
        className={`cursor2 ${isHidden ? "hidden" : ""}`}
      />
      <div
        id="cursor3"
        ref={cursor3Ref}
        className={`cursor3 ${isHidden ? "hidden" : ""}`}
      />
    </>
  );
};

export default Cursor;
