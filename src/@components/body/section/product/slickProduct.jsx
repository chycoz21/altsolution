import Slider from "react-slick";
import { product } from "../../../data/dami-data";
import { useRef, useEffect, useState } from "react";

export const SlickProduct = ({ getNameProduct }) => {
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: (i) => <div className="custom-dot"></div>,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getNameProduct]);

  return (
    <div className="product-slider">
      <Slider ref={sliderRef} {...settings}>
        {product
          .filter((item) => item?.nameProduct === getNameProduct)
          .flatMap((item) =>
            (windowWidth > 700 ? item?.img : item?.imgMobile || item?.img).map(
              (imgSrc, index) => (
                <div key={index} className="slide-item">
                  <img
                    src={imgSrc}
                    alt={`${getNameProduct} ${index + 1}`}
                    className="product-image"
                  />
                </div>
              )
            )
          )}
      </Slider>
    </div>
  );
};
