import styled from "styled-components";

const SlickStyles = styled.div`
  /* &.minheight .slick-track {
    min-height: 320px;
  } */
  /* Slider */
  .mcatsliderwrapper {
    .slick-slider {
      position: relative;
    }
    .slick-dots {
      bottom: -20px;
    }
    .card_title {
      padding: 14px 11px 0;
      border-top: 1px solid rgb(238, 240, 243);
    }
    .price_and_qty {
      padding: 0px 11px 0;
    }
  }
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
    /* min-height: 320px; */
  }
  .slick-track {
    margin-left: 0;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
    width: 100%;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    height: 54px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: #fff;
    right: 12px;
    width: 54px !important;
    border-radius: 50%;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    /* font-family: "slick"; */
    font-size: 20px;
    line-height: 1;

    /* opacity: 0.75; */
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    display: block;
    width: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    transform: translateX(-50%);
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 20px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 15px;
    height: 15px;
    padding: 10px 0;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    /* font-family: 'slick'; 
    font-size: 6px;
    line-height: 20px;*/
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 100%;
    position: absolute;
    top: 8px;
    left: 0;
    width: 8px;
    height: 8px;
    content: "";
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    /* opacity: .25; */

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    /* opacity: .75; */
    background-color: #212f27;
  }
  #hmSlide .slick-slide {
    /* width:82vw; */
    /* width: 62vw; */
  }
  @media (max-width: 576px) {
    #hmSlide .slick-slide {
      width: 76vw;
      height: 84px;
    }
  }
  .slick-resp {
    padding: 0 8px;
  }
  @media (min-width: 576px) {
    .slick-resp {
      padding: 0;
    }
  }
`;

const SlickTestimonials = styled.div`
  .slick-slide .hide-center {
    display: none;
  }
  .slick-center .hide-center {
    display: block;
  }
  #testimonialStyle .slick-center section {
    display: block !important;
  }
  #testimonialStyle .slick-dots {
    position: static;
  }
  @media (min-width: 992px) {
    #testimonialStyle .testiWrapCust {
      transition: 0.2s ease-in-out;
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
    }
    #testimonialStyle .slick-center div.testiWrapCust {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export { SlickStyles, SlickTestimonials };
