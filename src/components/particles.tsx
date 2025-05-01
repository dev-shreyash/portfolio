"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const TsParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60, // 60 is enough for mobile
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: !isMobile, // disable hover on mobile
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: isMobile ? 2 : 4,
          },
          repulse: {
            distance: 100,
            duration: 0.3,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: isMobile ? 1.5 : 3, // slower movement on mobile
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: isMobile ? 30 : 60, // fewer particles on mobile
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: isMobile ? 3 : 5 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};
