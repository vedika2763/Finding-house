import React, { ReactNode } from "react";
import Slider from "react-slick";
// import Slider from "react-slick";
import theme from "src/Utils/theme";
import { SlickStyles } from "src/component/SliderStyles";
import styled from "styled-components";

interface Props {
  className?: any;
  heading?: string;
  children: ReactNode;
  autoplay?: any;
  refProp?: any;
  headingReCom?: string;
  inverserArrow?: any;
}

const PropertySlider = (props: Props) => {
  const { className, children, heading, headingReCom, inverserArrow } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: true,
          variableWidth: false,
        },
      },
    ],
  };
  return (
    <SlickStyles>
      <SliderStyle inverserArrow={inverserArrow}>
        <div
          className="d-flex align-items-center justify-content-between"
          ref={props.refProp}
        >
          {heading && (
            <div
              className="mb-3 pb-md-1 Headline4"
              color={theme.colors.theme_secondary.dark}
            >
              {heading}
            </div>
          )}
        </div>

        <Slider {...settings}>{children}</Slider>
      </SliderStyle>
    </SlickStyles>
  );
};

const SliderStyle = styled.div<any>`
  .slick-list {
    height: auto !important;
  }
  button.slick-next {
    background: transparent;
  }
  /* div.slick-slide {
    width: calc(100vw - 92px);
  } */
  button.slick-next,
  button.slick-prev {
    z-index: 2;
  }
  button.slick-prev {
    padding: 0 0 0 4px;
    left: 245px;
    background: transparent;
    width: auto;
    top: -2rem;
  }
  button.slick-next {
    padding: 0 4px 0 0;
    /* right: 0;
    top: 10rem; */
    right: 0;
    left: 78%;
    top: -2rem;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.inverserArrow ? "27px" : "auto")};
  }


  div.slick-slide > div {
    /* margin: 0 10px;
    margin-bottom: 20px; */
  }
  .slick-list {
    margin: 0px -10px 0px -10px;
    height: 400px;
  }
  .slick-track {
    margin-left: 0;
  }
  button.slick-prev:before,
  button.slick-next:before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 27px;
    height: 27px;
    background: url(../images/left-long-solid.svg);
    background-repeat: no-repeat;
  }
  button.slick-next:before {
    transform: rotate(180deg);
  }
  .slick-list {
    margin: 0px -10px 0px -10px;
    height: 120px;
  }
  /* button.slick-prev:hover:before,
  button.slick-next:hover:before {
    border-color: #fff;
  } */
  /* .slick-arrow {
    display: none !important;
  } */
  /* .slick-slider:hover .slick-arrow {
    display: block !important;
  } */
  @media screen and (min-width: 576px) {
    button.slick-arrow.slick-prev.slick-disabled,
    button.slick-arrow.slick-next.slick-disabled {
      border-color: #d7d7d7;
    }
    /* .slick-prev.slick-disabled:hover,
    .slick-next.slick-disabled:hover {
      background-color: white;
    }
    .slick-prev.slick-disabled:hover:before,
    .slick-next.slick-disabled:hover:before {
      border-color: #d7d7d7;
    } */
  }
  @media screen and (max-width: 1200px) {
    button.slick-next {
      left: 85%;
    }
    button.slick-prev {
      left: -10px;
    }
  }
`;

export default PropertySlider;
