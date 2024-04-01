import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { SliderImages } from "../../assets/Data";
const Header = ({ Container }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header className="py-4">
      <Container>
        <Slider {...settings}>
          {SliderImages.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.src} alt="" />
              </div>
            );
          })}
        </Slider>
      </Container>
    </header>
  );
};

export default Header;
