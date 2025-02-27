import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56.25vw; // 16:9 비율로 변경 (100/16*9)
  max-height: 80vh; // 너무 커지지 않도록 제한
  margin: 0 auto;
  overflow: hidden;

  .slick-slider {
    height: 100%;
  }

  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-dots {
    bottom: 25px;
    z-index: 3;

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
  height: 56.25vw; // Container와 동일하게 16:9 비율
  max-height: 80vh;
  overflow: hidden;

  &::before {
    // 상단 그라데이션
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
    z-index: 2;
  }

  &::after {
    // 하단 그라데이션
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    z-index: 2;
  }

  .background-image {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    z-index: 1;
  }

  .logo-image {
    position: absolute !important;
    top: 50%;
    left: calc(5vw + 2rem);
    transform: translateY(-50%);
    z-index: 2;
    width: calc(30vw + 10rem) !important;
    max-width: 60rem !important;
    height: auto !important;
    object-fit: contain !important;
  }

  span {
    position: absolute;
    bottom: calc(15vh + 5rem); // 값 조정
    left: calc(5vw + 2rem);
    font-size: calc(1vw + 1.5rem);
    z-index: 2;
    color: white;
  }

  button {
    position: absolute;
    bottom: calc(10vh + 3rem); // 값 조정
    left: calc(5vw + 2rem);
    font-size: calc(1vw + 1.5rem);
    z-index: 2;
    background-color: white;
    border: 1px solid white;
    padding: 1rem 2rem;
    font-weight: 600;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
