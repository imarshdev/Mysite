import React, { useEffect, useRef, useState } from "react";

const FadeInView = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const currentRef = domRef.current;
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      style={{ transitionDelay: `${props.delay || 0}s` }}
    >
      {props.children}
    </div>
  );
};

export default FadeInView;