"use client";
import React, { FC } from "react";
import { Container, ImageContainer } from "./Styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface CarouselItem {
  id: number;
  button_text: string;
  content: string;
  event_destination: string | null;
  external_destination: string | null;
  item_destination: number | null;
  label: string;
  logo_img: string;
  mobile_img: string;
  web_img: string;
  theme_destination: string | null;
  is_adult: boolean;
}

const CarouselList: FC = () => {
  const [carousel, setCarousel] = React.useState<CarouselItem[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const getCarousel = async () => {
    try {
      const res = await fetch("/api/carousel");
      const data = await res.json();
      console.log("Carousel Data:", data);
      setCarousel(data);
    } catch (error) {
      console.error("Error fetching carousel:", error);
    }
  };

  React.useEffect(() => {
    getCarousel();
  }, []);

  console.log("<hojji>   carousel ===>>>   ", carousel);

  return (
    <Container>
      <Slider {...settings}>
        {carousel.map((item) => (
          <ImageContainer key={item.id}>
            <Image
              className="background-image"
              src={item.web_img}
              alt={item.content}
              width={1920}
              height={400}
              priority
            />
            <Image
              className="logo-image"
              src={item.logo_img}
              alt="logo"
              width={1000}
              height={500}
              priority
            />

            <span>{item.content}</span>
            <button>{item.button_text} &gt;</button>
          </ImageContainer>
        ))}
      </Slider>
    </Container>
  );
};

export default CarouselList;
