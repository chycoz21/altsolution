import { useEffect, useState, useRef } from "react";
import { customer } from "../../../data/dami-data";
import "./index.scss";

const OurCustomerSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const speedRef = useRef(1); // Kecepatan scroll (bisa disesuaikan)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Clone logos untuk efek infinite yang mulus
    const clone = content.cloneNode(true);
    container.appendChild(clone);
    container.style.width = `${content.offsetWidth * 2}px`;

    const animate = () => {
      container.style.transform = `translateX(${-speedRef.current}px)`;
      speedRef.current += 0.5; // Increment posisi scroll

      // Reset posisi ketika mencapai setengah konten
      if (speedRef.current >= content.offsetWidth) {
        speedRef.current = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [windowWidth]);

  const getLogoSize = (id) => {
    if (windowWidth < 700) {
      return {
        height: id !== "ssk" ? "30px" : "50px",
        padding: "0 15px",
      };
    }
    return {
      height: "60px",
      padding: "0 25px",
    };
  };

  return (
    <section className="our-customer-section">
      <div className="section-header">
        <h2>Our Customer</h2>
      </div>

      <div className="logos-container">
        <div className="logos-track" ref={containerRef}>
          <div className="logos-content" ref={contentRef}>
            {customer.map((item, index) => {
              const size = getLogoSize(item.id);
              return (
                <div
                  className="logo-wrapper"
                  key={`logo-${index}`}
                  style={{ padding: size.padding }}
                >
                  <img
                    src={item.img}
                    alt={item.id}
                    style={{ height: size.height }}
                    className="partner-logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomerSection;
