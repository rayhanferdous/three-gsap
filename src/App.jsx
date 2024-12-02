import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThreeJsBox from "./components/ThreeJsBox";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.to(".size-14", {
      duration: 1,
      // delay: 2,
      x: "50vw",
      repeat: -1,
      rotation: 360,
      width: "100px",
      height: "100px",
      yoyo: true,
      ease: "bounce.out",
    });

    gsap.to(".svgBox", {
      duration: 2,
      x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
      xPercent: -100,
      // or target SVG attributes
      attr: {
        fill: "#8d3dae",
        rx: 50,
      },
      ease: "back.out",
      scrollTrigger: {
        trigger: ".svgBox", // This is the element that triggers the animation
        start: "top 80%", // When the element reaches 80% of the viewport height
        end: "top 30%", // When the element reaches 30% of the viewport height
        scrub: true, // Enable smooth scrubbing of the scroll
        markers: true, // Optional: This will show markers for debugging
      },
    });
  }, []);

  return (
    <div className="w-full">
      <div className="size-14 rounded-md bg-red-300"></div>
      <svg id="svg" viewBox="0 0 100 100">
        <rect
          className="svgBox"
          fill="#28a92b"
          x="0"
          y="35"
          width="30"
          height="30"
          rx="2"
        />
      </svg>
      <ThreeJsBox />
    </div>
  );
}

export default App;
