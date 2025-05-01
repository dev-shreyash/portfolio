import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
      zIndex: 999,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: isMobile ? 0.4 : 0.8,
        ease: isMobile ? "power2.out" : "power4.out",
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: isMobile ? "30vh" : "50vh",
          borderBottomLeftRadius: isMobile ? "30vh" : "50vh",
          duration: isMobile ? 0.2 : 0.4,
          ease: "power1.out",
        },
        "<"
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: isMobile ? "30vh" : "50vh",
      borderBottomRightRadius: isMobile ? "30vh" : "50vh",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
      zIndex: 999,
    })
      .to(animationWrapper, {
        xPercent: 0,
        duration: isMobile ? 0.4 : 0.8,
        ease: isMobile ? "power2.out" : "power4.out",
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          duration: isMobile ? 0.2 : 0.4,
          ease: "power1.out",
        },
        "<"
      );
  }
};
