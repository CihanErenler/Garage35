import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Parallax = ({ image, overlay = true, speed = 0.5, title, subtitle }) => {
  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementCenter = elementTop + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - windowCenter;

      // Calculate offset based on distance from center of viewport
      const parallaxOffset = distanceFromCenter * speed * -1;
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={parallaxRef}
      className="relative h-[300px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translate3d(0, ${offset}px, 0)`,
          height: "150%",
          top: "-25%",
        }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/50 to-gray-950/95" />
        )}
      </div>
    </div>
  );
};

Parallax.propTypes = {
  image: PropTypes.string.isRequired,
  overlay: PropTypes.bool,
  speed: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Parallax;
