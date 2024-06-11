"use client";
import React, { useEffect, useRef } from 'react';
import './cursor.scss'; // Make sure to create and import the SCSS file for cursor styles

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const cursor2Ref = useRef<HTMLDivElement | null>(null);
    const cursor3Ref = useRef<HTMLDivElement | null>(null);

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

        const handleMouseOver = () => {
            if (cursor2Ref.current && cursor3Ref.current) {
                cursor2Ref.current.classList.add('hover');
                cursor3Ref.current.classList.add('hover');
            }
        };

        const handleMouseOut = () => {
            if (cursor2Ref.current && cursor3Ref.current) {
                cursor2Ref.current.classList.remove('hover');
                cursor3Ref.current.classList.remove('hover');
            }
        };

        document.body.addEventListener('mousemove', handleMouseMove);

        const hoverTargets = document.querySelectorAll('.hover-target');
        hoverTargets.forEach((target) => {
            target.addEventListener('mouseover', handleMouseOver);
            target.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            hoverTargets.forEach((target) => {
                target.removeEventListener('mouseover', handleMouseOver);
                target.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    return (
        <>
            <div id="cursor" ref={cursorRef} className="cursor"></div>
            <div id="cursor2" ref={cursor2Ref} className="cursor2"></div>
            <div id="cursor3" ref={cursor3Ref} className="cursor3"></div>
        </>
    );
};

export default Cursor;
