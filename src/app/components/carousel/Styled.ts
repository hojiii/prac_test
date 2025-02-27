import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100rem;
  margin: 0 auto;

  .slick-slider {
    height: 100%;
  }

  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-dots {
    bottom: 25px;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }
  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 40px;
    height: 40px;

    &:before {
      font-size: 40px;
      opacity: 0.75;
    }
  }

  .slick-prev {
    left: 25px;
  }

  .slick-next {
    right: 25px;
  }

  .slick-dots {
    bottom: 25px;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100rem;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .logo-image {
    position: absolute !important;
    top: 50%;
    left: 10rem;
    transform: translateY(-50%);
    z-index: 2;
    max-width: 60rem !important;
    width: 60rem !important;
    height: auto !important;
    object-fit: contain !important;
  }

  span {
    position: absolute;
    bottom: 30rem;
    left: 10rem;
    font-size: 3rem;
    z-index: 2;
    color: white;
  }
  button {
    position: absolute;
    bottom: 22rem;
    left: 10rem;
    font-size: 3rem;
    z-index: 2;
    background-color: white;
    border: 1px solid white;
    padding: 1rem 2rem;
    font-weight: 600;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
