import styled from "styled-components";

const FindHouseStyled = styled.div`
  .main-header {
    padding: 22px 0 15px 0;
    position: absolute;
    z-index: 999;
    width: 100%;
    background: #ffffff70;
  }
  #logo {
    margin-right: 0px;
    width: 60px;
  }
  #logo img {
    width: 60px;
    height: auto;
    transform: translate3d(0, 0, 0);
    display: inline-block;
    max-width: 100%;
  }
  .nav-links {
    margin: 0 0 0 40px;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
  }
  .nav-links li {
    margin: 0 5px;
    transition: all 0.25s;
    border-radius: 3px;
    position: relative;
    float: left;
  }
  .nav-links li a {
    font-size: 16px;
    text-transform: capitalize;
    line-height: 32px;
    padding: 6px 16px;
    display: block;
    color: #000;
    text-decoration: none;
  }
  .nav-links li:hover {
    background: #3e4452;
  }
  .nav-links li:hover a {
    color: #fff;
  }
  .show-reg-form {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    margin-left: 0px !important;
    margin-right: 12px;
    width: fit-content;
    padding: 0 20px 0 20px;
  }
  .show-reg-form a {
    color: #000;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
  }
  .image-border {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .profile img {
    /* border: 3px solid #fff;  */
    border-radius: 50%;
    box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
  .header-user-name {
    position: relative;
    float: left;
    cursor: pointer;
    color: #000;
    transition: 0.2s;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 10px;
    font-weight: 400;
  }

  .main-header.scrolled {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    z-index: 999;
    animation: slideDown 0.35s ease-out;
    background: #fff;
}

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-left: -115px;
  }
  .add-listing {
    box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    max-width: 150px;
    width: 100%;
    background: #3e4452;
    padding: 10px 20px;
    position: relative;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    display: inline-flex;
    transition: all 0.2s ease-in-out;
    color: #fff;
    justify-content: space-evenly;
  }
  .w-100 {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  .first-footer .top-footer {
    background: #303441;
    color: #333;
    padding: 6rem 0;
    border-top: 1px solid #e5e5e5;
  }
  .bg-white {
    background: #fff !important;
  }
  .newsletters p,
  .first-footer .netabout p {
    color: #666;
  }
  .first-footer .netabout p {
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
  .first-footer .logo img {
    width: 180px;
    height: auto;
    margin-bottom: 1.6rem;
  }
  .first-footer .contactus ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .first-footer .contactus ul li {
    margin-bottom: 1.1rem;
  }
  .first-footer .contactus ul li:last-child,
  .first-footer .contactus .info:last-child {
    margin-bottom: 0px !important;
  }
  .first-footer .contactus .info {
    display: flex;
    margin-bottom: 0.6rem;
  }
  .first-footer .contactus .info p {
    color: #666;
  }
  .first-footer .contactus .info p {
    margin: 0px;
    font-size: 15px;
    margin-left: 1rem;
    line-height: 1.1;
    font-weight: 400;
  }
  .first-footer .contactus ul li .fa,
  .first-footer h3,
  .navigation ul li a,
  .twitter-widget.contuct .twitter-area .text h5 {
    color: #333;
  }
  .navigation h3 {
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: 500;
  }
  .first-footer .navigation h3::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #ff385c;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .first-footer .netabout h3::after,
  .first-footer .navigation h3::after,
  .first-footer .widget h3::after,
  .first-footer .contactus h3::after {
    background-color: #3e4452 !important;
  }
  .first-footer .nav-footer {
    display: flex;
  }
  .navigation ul {
    list-style: none;
    padding: 0px;
    margin-bottom: 0px;
  }
  .navigation ul li {
    margin-bottom: 1rem;
    border-bottom: 1px dotted #666;
  }
  .navigation ul li a {
    text-decoration: none;
    color: rgba(245, 255, 255, 0.8);
    font-weight: 400;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .navigation a {
    display: block;
    margin-bottom: 0.6rem;
  }
  .first-footer .contactus ul li .fa,
  .first-footer h3,
  .navigation ul li a,
  .twitter-widget.contuct .twitter-area .icon-holder i,
  .twitter-widget.contuct .twitter-area .text h5 {
    color: #333;
    font-weight: 500;
  }
  .navigation .nav-right {
    margin-left: 2rem;
  }
  .first-footer .newsletters h3::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #3e4452;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .first-footer .widget h3::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #ff385c;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .twitter-widget.contuct .single-item {
    position: relative;
    margin-bottom: 25px;
  }
  .twitter-widget.contuct .twitter-area .icon-holder {
    position: absolute;
    left: 0;
    top: 0;
  }
  .twitter-widget.contuct .twitter-area .text {
    padding: 0px 0px 0px 30px;
  }
  .twitter-widget.contuct .twitter-area .text h5 a,
  .inner-pages .twitter-widget.contuct .twitter-area .text h5 a {
    color: #fff;
    font-weight: 400;
  }
  .twitter-widget.contuct .twitter-area .text h5 a {
    color: #3e4452;
  }
  .twitter-widget.contuct .twitter-area .text h4,
  .inner-pages .twitter-widget.contuct .twitter-area .text h4 {
    font-size: 14px;
    color: rgba(245, 255, 255, 0.8);
    font-weight: 400;
    margin-bottom: 0px;
  }
  .twitter-widget.contuct .twitter-area .text h4,
  .inner-pages .twitter-widget.contuct .twitter-area .text h4 {
    color: #3e4452;
  }
  .newsletters p {
    margin-bottom: 2rem;
    font-weight: 400;
  }
  .bloq-email {
    display: flex;
    flex: 1 1 auto;
  }
  .form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  form label.error {
    display: block;
    color: #ff0000;
    font-size: 14px !important;
    opacity: 1 !important;
  }
  .first-footer .bloq-email label.error {
    color: #ff0000;
  }
  .bloq-email .email {
    display: flex;
    height: 3rem;
    flex-wrap: wrap;
    max-width: 345px;
    width: 100%;
  }
  .first-footer .bloq-email .email input[type="email"] {
    border: 0px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 0.8rem;
    flex: 1 1 auto;
  }
  .first-footer .bloq-email .email input[type="email"] {
    border: 1px solid #3e4452;
    background: #282d32;
    color: #fff;
  }
  .first-footer .bloq-email .email input[type="submit"] {
    border: 0px;
    padding: 0.8rem;
    background: #ff385c;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 1.5rem;
    cursor: pointer;
    flex: 1 1 auto;
    transition: all 0.5s ease;
  }
  .first-footer .bloq-email .email input[type="submit"] {
    background: #3e4452;
  }
  .bg-white-3 {
    background: url(../images/bg-white-3.png) 0 0 repeat !important;
  }

  .second-footer {
    padding: 1.5rem 0;
    background: #303441;
    border-top: 1px solid rgba(245, 255, 255, 0.1);
    color: #fff;
  }
  .second-footer p {
    color: #666;
  }
  .second-footer p {
    margin-top: 0.5rem;
    margin-bottom: 0px;
    font-weight: 400;
  }

  .second-footer .container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
  }
  .first-footer .netsocials {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .netsocials li a {
    text-align: center;
    background: transparent;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    margin-right: 1.5rem;
    transition: all 0.5s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .netsocials li .facebook {
    background: #3b5998;
  }
  .netsocials li .twitter {
    background: #1da1f2;
  }
  .netsocials li .instagram {
    background: #e1306c;
  }
  .netsocials li .youtube {
    background: #cd201f;
  }
  .widget {
    padding: 0 10px 0 0;
  }

  @media (max-width: 535px) {
    .second-footer .container {
      flex-direction: column;
      align-items: center;
    }
    .second-footer p {
      margin-bottom: 15px;
    }
    .newsletters {
      padding: 0 14px 0 0;
    }
  }
  #aboutUs .headings {
    background: linear-gradient(rgba(18, 27, 34, 0.6), rgba(18, 27, 34, 0.6)),
      url(../images/bg-testimonials.jpeg) no-repeat center center;
    width: 100%;
    height: 30vh;
  }
  .text-heading {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
  }
  .headings h1 {
    margin-top: 7.5rem;
    font-size: 26px;
    color: #fff;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
  }
  .headings h2 {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .headings h2 a {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.5s ease;
  }
  section.about-us {
    background: #fff;
    padding: 6rem 0;
  }

  h2 {
    color: #222;
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  .about-us h2::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #121b22;
    content: " ";
    width: 97px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .about-us .who-1 h2 span {
    color: #ff385c;
    font-weight: 400;
  }
  .about-us .who-1 p {
    color: #666;
    background: #fff;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 1rem;
    font-size: 15px;
  }
  .about-us .box.bg-2 {
    color: #000 !important;
    background: #fff;
  }

  .bg-2 {
    background: #fff;
    color: #000;
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }
  .about-us.fh .box .button {
    padding: 20px;
    width: 100%;
  }
  .about-us .box.bg-2 a {
    text-decoration: none;
  }
  a.button {
    border-radius: 8px;
    box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.2);
  }
  .bg-2 .button {
    color: #000 !important;
    border-color: #ff385c;
  }
  .box .button {
    float: left;
    min-width: 150px;
    max-width: 250px;
    display: block;
    margin-bottom: 0px;
    padding: 1em 2em;
    border: 2px solid #ff385c;
    background: none;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.3s ease;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .button--moema::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    background: inherit;
    border-radius: 50px;
    z-index: -1;
    opacity: 0.4;
    transform: scale3d(0.8, 0.5, 1);
  }
  .about-us .button:hover {
    color: #fff !important;
    border-color: #fff;
  }
  .button--moema:hover {
    transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
    background-color: #3f51b5;
    animation: anim-moema-1 0.3s forwards;
  }
  @keyframes anim-moema-1 {
    60% {
      transform: scale3d(0.8, 0.8, 1);
    }

    85% {
      transform: scale3d(1.1, 1.1, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  .button--moema:hover::before {
    animation: anim-moema-2 0.3s 0.3s forwards;
  }
  @keyframes anim-moema-2 {
    100% {
      opacity: 0;
      transform: scale3d(1, 1, 1);
    }
  }
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
  .about-us.fh .popup-youtube {
    background: #0f1341 none repeat scroll 0 0;
    border-radius: 100%;
    color: #03a9f5;
    font-size: 30px;
    height: 70px;
    left: 50%;
    line-height: 70px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    z-index: 9;
  }
  .about-us.fh .wprt-image-video .iq-waves {
    height: 352px;
    height: 22rem;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 352px;
    width: 22rem;
    z-index: 2;
  }
  .about-us.fh .wprt-image-video .iq-waves .wave-1 {
    animation-delay: 0s;
  }
  .wprt-image-video {
    position: relative;
  }
  .about-us.fh .wprt-image-video .iq-waves .waves {
    animation: 3s ease-in-out 0s normal none infinite running waves;
    background: rgba(255, 255, 255, 0.2) none repeat scroll 0 0 padding-box;
    border-radius: 320px;
    height: 22rem;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    position: absolute;
    width: 22rem;
  }
  .about-us.fh .wprt-image-video .iq-waves .wave-2 {
    animation-delay: 1s;
  }
  .about-us.fh .wprt-image-video .iq-waves .wave-3 {
    animation-delay: 2s;
  }
  @keyframes waves {
    0% {
      transform: scale(0.2, 0.2);
      opacity: 0;
    }

    50% {
      opacity: 0.9;
    }
    100% {
      transform: scale(0.6, 0.6);
      opacity: 0;
    }
  }
  .how-it-works {
    background: #fff;
    padding: 4.6rem 0;
  }

  .bg-white-2 {
    background: #f5f7fb !important;
  }
  .sec-title {
    text-align: center;
    padding-bottom: 2rem;
  }

  .how-it-works .sec-title {
    margin-left: 0.5rem;
  }
  .sec-title h2 {
    color: #444;
    font-size: 1.7rem;
    text-align: center;
    padding-bottom: 0rem;
  }
  .sec-title h2 span {
    font-weight: 600;
    color: #ff385c;
  }
  p {
    line-height: 26px;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 15px;
  }
  .how-it-works .serv-flex {
    background: #fff;
    color: #f55d2c;
    text-align: center;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0px 0px 1px #e7e7e7 !important;
    border: 1px solid #e7e7e7;
    transition: 0.5s ease;
  }
  .how-it-works .art-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .how-it-works article img {
    width: 100px;
    height: 100px;
    text-align: center;
  }
  .how-it-works article h3 {
    color: #222;
    margin: 1.7rem 0 0.2rem;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  .how-it-works article p {
    color: #666;
    margin-top: 1rem;
    margin-bottom: 0px;
  }
  section.counterup {
    padding: 6rem 0;
    background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(../images/bg-counter2.jpg) no-repeat center center;
    background-attachment: fixed;
    color: #fff;
    text-align: center;
  }
  .counterup .countr {
    display: flex;
  }
  .counterup .countr svg {
    width: 3rem;
    height: 3rem;
    color: #ff385c;
    border-radius: 5px;
    margin-right: 1.5rem;
  }
  .counterup .countr p {
    font-size: 30px;
    font-weight: 600;
    color: #121b22;
  }
  .counterup .count-me h3 {
    text-transform: capitalize;
    color: #121b22;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0px;
  }
  section.team {
    padding: 6rem 0;
    background: #f5f7fb;
  }
  .team-wrap {
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .team-img {
    position: relative;
    z-index: 9;
  }
  .team-img img {
    width: 100%;
  }
  .team-content {
    height: 80px;
    width: 100%;
    bottom: 0;
    position: absolute;
    text-align: center;
    overflow: hidden;
    transition: all 0.6s;
    z-index: 9;
    background: #ff385c;
  }
  .team-content .team-info {
    background: #fff !important;
    padding: 20px;
    transition: all 0.3s;
  }
  .team-content {
    height: 80px;
    width: -webkit-fill-available;
    bottom: 0;
    border: 1px solid #ccc;
    position: absolute;
    overflow: hidden;
    transition: all 0.6s;
    z-index: 9;
    background: #fff;
  }
  .team .team-pro ul {
    padding: 0;
    margin: 0;
  }

  .team-content ul {
    opacity: 0;
    display: flex;
    justify-content: center;
    backface-visibility: hidden;
    transition: transform 0.6s, opacity 0.4s;
  }
  .team-content p {
    color: #000;
    font-style: italic;
    margin-bottom: 10px;
    font-size: 0.97rem;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .team-content h3 {
    text-transform: capitalize;
    margin-bottom: 0px;
    color: #444;
    font-size: 16px;
  }
  .team .team-pro ul li {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .team-content ul li {
    opacity: 0;
    padding: 0.3rem 0;
    transform: translateY(40px);
    transition: transform 0.6s, opacity 0.1s;
    display: inline-block;
  }
  .team-socials ul li a {
    display: inline-flex;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
    line-height: 2.1rem;
  }
  .team-socials ul li .facebook {
    background: #3b5998;
  }
  .team-socials ul li .twitter {
    background: #1da1f2;
  }
  .team-socials ul li .instagran {
    background: #e1306c;
  }
  .team-socials img {
    width: 1.1rem;
    height: 1.1rem;
  }
  .team-content span a {
    color: #000;
    transition: all 1s;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
  }
  .team-wrap:hover .team-content {
    height: 150px;
  }
  .team-wrap:hover .team-content ul {
    opacity: 1;
    transform: translateY(0px);
    transition: transform 0.6s, opacity 0.4s, -webkit-transform 0.6s;
    margin-bottom: 10px;
  }
  .team-wrap:hover .team-content span a {
    bottom: 10px;
  }
  .team-wrap:hover .team-content ul li:nth-child(1) {
    transition-delay: 100ms;
  }

  .team-wrap:hover .team-content ul li {
    opacity: 1;
    transform: translateY(0px);
  }
  section.testimonials {
    padding: 4.6rem 0;
  }

  .bg-white {
    background: #fff !important;
  }
  .testimonials .test-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    color: #000;
    border-radius: 10px;
  }
  .testimonials .test-1 img {
    width: 90px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .testimonials .test-1 h3 {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: #ff385c;
    font-weight: 600;
  }
  .testimonials .test-1 h6 {
    text-align: center;
    font-weight: 400;
    margin-bottom: 0px;
    color: #000;
    font-size: 15px;
  }
  .starts {
    list-style: none;
    margin-top: 0.4rem;
    padding: 0px;
  }
  .starts li {
    text-align: center;
    display: inline-block;
    margin-bottom: 1.8rem;
  }
  .starts svg {
    color: #ff385c !important;
  }
  .testimonials .test-1 p {
    text-align: center;
    font-weight: 400;
    font-style: italic;
    margin: 0.3rem auto 0;
    max-width: 500px;
    color: #666;
  }
  .slick-dots li.slick-active button:before {
    background-color: #ff385c !important;
  }
  #aboutUs .slick-dots li button:before {
    background-color: #121b22 !important;
    width: 10px !important;
    height: 10px !important;
  }

  .partners {
    padding: 3rem 0;
    background: #f7f7f7;
    color: #000;
  }
  .bg-white-2 {
    background: #f5f7fb !important;
  }
  .partners img {
    width: 100%;
    opacity: 0.5;
    background: transparent;
    cursor: pointer;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .partners .slick-slide {
    margin: 0 10px;
  }

  @media screen and (max-width: 991px) {
    .box.bg-2 img {
      width: 30%;
    }
  }
  a {
    text-decoration: none;
  }
  #Blog .headings {
    background: linear-gradient(rgba(18, 27, 34, 0.6), rgba(18, 27, 34, 0.6)),
      url(../images/bg-details.jpg) no-repeat center center;
    width: 100%;
    height: 30vh;
  }

  .text-heading {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
  }
  .headings h1 {
    margin-top: 7.5rem;
    font-size: 26px;
    color: #fff;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
  }
  .headings h2 {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.5s ease;
  }

  h2 {
    color: #222;
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  .headings h2 a {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.5s ease;
  }
  .blog-section {
    padding: 6rem 0;
    background: #f5f7fb;
  }
  .blog-section .news-item {
    background: #fff;
    box-shadow: 0px 0px 1px #e7e7e7 !important;
    border: 1px solid #e7e7e7;
    overflow: hidden;
  }
  .blog-section .news-item-img {
    position: relative;
    width: 100%;
  }
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
  .blog-section .news-item-text {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .blog-section .news-item h3 {
    color: #000;
    transition: all 0.25s;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  h3 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
  }
  .blog-section .dates {
    display: flex;
    margin-top: 0.3rem;
  }
  .blog-section .news-item .date {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
  }
  .blog-section .action-list {
    margin-bottom: 0px;
    display: flex;
    font-size: 0.8rem;
    color: #444;
  }
  li {
    list-style: none;
  }
  .blog-section .action-item {
    display: inline-block;
    padding-left: 15px;
    display: flex;
    align-items: flex-start;
  }
  .blog-section .action-list svg {
    color: #ff385c;
    width: 15px;
    height: 15px;
  }
  .blog-section .news-item-descr {
    margin: 6px 0px 20px 0px;
  }
  .blog-section .news-item-descr p {
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    line-height: 26px;
  }
  .blog-section .news-item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .blog-section .news-link {
    position: relative;
    font-size: 1rem;
    font-weight: 600;
    color: #ff385c;
    transition: all 0.25s;
  }
  .blog-section .admin {
    display: flex;
    align-items: center;
  }
  .blog-section .admin p {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 0px;
  }
  .blog-section .news-item-bottom img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .blog-section .news-item a:hover h3 {
    color: #ff385c;
    transition: all 0.25s;
  }
  .blog-section .space {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  @media screen and (max-width: 991px) {
    .blog-section .news-item {
      margin-bottom: 2.5rem;
    }
  }
  #ContactUs .headings {
    background: linear-gradient(rgba(18, 27, 34, 0.6), rgba(18, 27, 34, 0.6)),
      url(../images/bg-details.jpg) no-repeat center center;
    width: 100%;
    height: 30vh;
  }
  .text-heading {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
  }
  .headings h1 {
    margin-top: 7.5rem;
    font-size: 26px;
    color: #fff;
  }
  h1 {
    line-height: 1.2;
    font-weight: 800;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
  }
  .headings h2 {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.5s ease;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  .headings h2 a {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.5s ease;
  }
  iframe {
    border: none;
  }
  .contact-us {
    padding: 6rem 0;
  }
  .property-location {
    padding: 1.5rem !important;
    background: #fff;
    border: 1px solid #eaeff5;
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
  }
  .contact-us h3 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-control {
    padding: 0.7rem;
    border: 1px solid #dddddd;
  }
  .form-control {
    display: block;
    width: -webkit-fill-available;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
  }
  .contact-us .btn {
    background: #ff385c;
    border: 1px solid #ff385c;
    cursor: pointer;
    transition: all 0.5s ease;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    color: #fff;
    display: inline-block;
    font-weight: 400;
  }
  .contact-us .btn:hover {
    background: #fff;
    color: #121b22;
    border: 1px solid #ff385c;
  }
  .bgc {
    background: linear-gradient(rgba(32, 51, 100, 0.8), rgba(32, 51, 100, 0.8)),
      url(../images/bg-testimonials.jpg) no-repeat center center;
    padding: 2rem;
    background-size: cover;
  }
  .call-info h3 {
    color: #fff;
    margin-bottom: 2rem;
  }

  .contact-us h3 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .call-info h3::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #fff;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .call-info p {
    color: #fff;
    line-height: 26px;
  }
  .call-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .contact-us ul li {
    list-style: none;
    font-weight: 300;
  }
  .call-info ul li svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }
  .call-info .info p {
    color: #fff;
    margin: 0px;
    margin-left: 1.5rem;
    font-weight: 300;
  }
  .call-info .info {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  #ListingHouse {
    background: #f5f7fb;
    padding: 4.6rem 0;
  }
  a {
    text-decoration: none;
  }
  input,
  select,
  textarea {
    outline: none;
  }
  .text-heading.text-left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .text-heading p {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    line-height: 1;
  }

  .text-heading p a {
    font-size: 17px;
    text-decoration: none;
    color: #333;
  }

  .text-heading h3 {
    font-size: 28px;
    line-height: 34px;
    font-weight: 500;
    color: #222;
    text-transform: capitalize !important;
  }

  .headings-2 {
    padding: 60px 0 55px 0;
  }

  .agents .pro-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-result {
    line-height: 1;
    font-weight: 500;
  }

  .shortBy {
    font-weight: 600;
    letter-spacing: 0.93px !important;
    text-transform: uppercase !important;
    padding-right: 0.25rem !important;
    line-height: 1.5;
    color: #495057;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
  }

  .pro-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .single-detail-wrapper {
    display: flex;
  }

  #selectShortBy {
    outline: none;
    border: 0;
    background: transparent;
    color: #495057;
    font-weight: 400;
    background-clip: padding-box;
    cursor: pointer;
    padding: 0.5rem 1rem 0.5rem 0.5rem !important;
    font-size: 15px;
    line-height: 1;
    border-radius: 3px;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    margin-bottom: 0;
  }

  .change-view-btn {
    color: #121b22 !important;
    border: 1px solid #121b22;
    margin-left: 5px;
    border-radius: 2px;
    background: transparent;
    padding: 5px 9px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .active-view-btn {
    background: #121b22 !important;
  }

  .active-view-btn svg {
    color: #fff;
  }
  .project-head {
    background-color: transparent;
    border-radius: 8px 8px 0 0;
    position: relative;
    text-align: center;
    height: 100%;
  }
  .homes {
    height: 100%;
  }
  .homes-img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .project-head:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
    z-index: 1;
    background: #121b22;
    color: #fff;
    text-align: center;
    transition: all 0.5s ease;
  }
  .img-responsive {
    width: 100%;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
  .homes-tag.button.alt.featured {
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 2px;
    color: #fff;
    border: none;
    background-color: #ff385c;
    display: inline-block;
    position: absolute;
    top: 15px;
    z-index: 1;
    left: 15px;
  }
  .homes-tag.button.alt.sale {
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 2px;
    color: #fff;
    border: none;
    background-color: rgba(74, 74, 76, 0.7) !important;
    display: inline-block;
    position: absolute;
    top: 15px;
    z-index: 1;
    right: 15px;
  }
  .homes-price {
    font-size: 20px !important;
    font-weight: 500;
    background: transparent !important;
    padding: 6px 14px;
    border-radius: 2px;
    color: #fff;
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 0;
  }
  .button-effect {
    background: transparent;
    padding: 8px 0px;
    border-radius: 20px 0 0 0;
    transition: all 0.4s ease;
    margin-bottom: 0.7rem;
    opacity: 1;
    visibility: visible;
    transform: translateX(0%);
    position: absolute;
    right: 0;
    z-index: 1;
    bottom: 0;
    margin: 0;
  }
  .button-effect .btn {
    color: #fff;
    box-shadow: none;
    padding: 0;
    margin-right: 15px;
    border-radius: 8px;
    width: 36px;
    height: 36px;
    line-height: 33px;
    background: rgba(74, 74, 76, 0.7);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .homes-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #444;
    margin-bottom: 3px;
  }
  .homes-content h3 a {
    font-size: 1.2rem;
    font-weight: 600;
    color: #444;
    margin-bottom: 3px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .homes-content h3 a:hover {
    color: #ff385c;
  }
  .homes-content .homes-address a span {
    font-size: 13px;
    font-weight: 400;
    margin: 0 0 1px;
    text-decoration: none;
  }
  .homes-content .homes-address a {
    color: #666;
    display: flex;
    align-items: center;
  }
  .homes-list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    list-style: none;
  }
  .homes-content .homes-list .the-icons {
    width: 45%;
    font-size: 14px;
    line-height: 36px;
    font-weight: 300;
    list-style: none;
    color: #666;
    display: flex;
    align-items: center;
  }
  .homes-content .footer {
    border-top: 1px solid #eee;
  }
  .homes-content .footer {
    background: none;
    border-top: 1px solid #e8e8e8;
    padding-top: 1rem;
    font-size: 13px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer a {
    color: #666;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .footer img {
    border-radius: 50%;
  }
  .house-view-card {
    background: #fff;
    padding: 0;
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
  }
  .main-search-field {
    background: #fff;
    padding-bottom: 30px;
  }
  .white-box {
    border-radius: 6px;
    padding: 1.5rem;
    box-shadow: 0px 0px 2px #e7e7e7 !important;
    transform: translate3d(0, 0, 0);
    z-index: 90;
    margin-bottom: 0px;
    position: relative;
    border: 1px solid #eaeff5;
    background: #fff;
  }
  .boxed-header {
    padding-bottom: 1.5rem;
    padding-top: 0px;
    border-bottom: 1px solid #eaeff5;
  }
  .boxed-header h4 {
    color: #222 !important;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  .form-group {
    width: 100%;
    display: inline-block;
    margin-right: 3px;
    margin-bottom: 0px;
    margin-top: 20px;
  }
  .main-search-input-item {
    float: left;
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    position: relative;
  }
  .form-group input {
    float: left;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: -webkit-fill-available;
    padding-left: 20px;
    height: -webkit-fill-available;
  }
  .form-group select {
    float: left;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: -webkit-fill-available;
    height: 50px;
    padding-left: 30px;
    background: transparent;
    box-shadow: none;
    color: #757575;
    font-weight: 400;
    font-size: 15px;
  }

  .main-search-input-item svg,
  .main-search-input-item img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }
  .main-search-field-2 {
    margin-top: 20px;
  }
  .range-slider {
    line-height: 37px;
  }
  .range-slider label {
    color: #333;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 25px;
  }

  .main-search-field .at-col-default-mar {
    margin-bottom: 0px;
  }
  .hvr-bounce-to-right {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-top: 2rem;
    font-size: 14px;
    cursor: pointer;
    background: #ff385c;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    padding: 12px 22px;
    border-radius: 0;
    transition: all 0.5s ease;
  }
  .hvr-bounce-to-right:hover {
    background: #121b22;
  }

  .listing-item {
    background-color: #fff;
    display: block;
    width: 100%;
    border-radius: 3px;
  }
  .listing-img-container {
    position: relative;
    height: 100%;
    width: 100%;
    display: block;
  }
  .listing-img-container:before {
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    content: "";
    z-index: 9;
    background: linear-gradient(to bottom, transparent 50%, #2f2f2f);
    /* transform: translateY(10px); */
    opacity: 0.7 !important;
  }
  .listing-item.compact .listing-badges {
    position: absolute;
    top: 0;
    z-index: 8;
    right: 0;
    width: 100%;
    display: block;
    font-size: 13px;
    padding: 0px;
    overflow: hidden;
    height: 100px;
  }
  .listing-item.compact .listing-badges .featured {
    background-color: #18ba60;
    float: left;
    left: 15px;
    top: 17px;
    position: relative;
    text-align: center;
    width: 90px;
    font-size: 14.5px;
    margin: 0;
  }
  .listing-item.compact .listing-badges span {
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    background-color: #ff385c;
    border-radius: 3px;
    top: 15px;
    right: 15px;
    position: absolute;
  }
  .listing-img-content {
    padding: 0;
    position: absolute;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    /* padding: 25px 30px; */
  }
  .listing-img-content .listing-compact-title {
    padding: 23px 26px;
    display: block;
  }

  .listing-img-content span {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
  .listing-img-content .listing-compact-title i {
    display: block;
    font-style: normal;
    font-size: 17px;
    padding: 0;
    margin: 2px 0 0 0;
  }
  .listing-hidden-content {
    position: relative;
    width: auto;
    background-color: #ff385c;
    color: #fff;
    height: 0;
    transition: all 0.4s;
    margin: 0;
    list-style: none;
    font-size: 14px;
    text-align: center;
    display: block;
    overflow: hidden;
  }
  .listing-img-container img {
    width: 100%;
    border-radius: 3px 3px 0 0;
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
  .listing-item.compact:hover .listing-hidden-content {
    height: 70px;
  }
  .listing-item.compact .listing-hidden-content li {
    opacity: 1;
  }

  .listing-item.compact li {
    display: inline-block;
    color: rgba(255, 255, 255, 0.8);
    line-height: 20px;
    padding: 15px 20px 0 0;
    position: relative;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    opacity: 0;
  }
  .listing-item.compact li span {
    display: block;
    font-size: 14px;
    color: #fff;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 991px) {
    .img-responsive {
      border-radius: 0;
    }
    .homes-content div {
      padding-left: 1rem;
    }
  }

  @media (max-width: 528px) {
    .pro-wrapper {
      flex-direction: column;
      align-items: baseline;
    }
    .shortBy {
      padding: 0 !important;
    }
    .search-result {
      margin-bottom: 30px !important;
    }
  }
  a {
    text-decoration: none;
  }
  #banner {
    /* background: url(/images/banner.jpg); */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
  }
  .banner-inner-wrap {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner-inner {
    color: #3e4452;
  }
  .banner-inner h1 {
    font-size: 45px;
    line-height: 66px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    text-transform: capitalize;
  }
  .banner-inner h5 {
    margin-bottom: 80px;
    font-weight: 500;
    font-size: 18px;
  }
  #recent-properties {
    padding: 4.6rem 0;
    background: #f7f7f7;
  }
  .bg-white-3 {
    background: url(../images/bg-white-3.png) 0 0 repeat !important;
  }
  .container-fluid.recently-slider {
    width: 100%;
  }
  .recently-slider {
    padding-left: calc((100% - 1140px) / 2 + 15px) !important;
    padding-right: 0 !important;
  }
  .section-title {
    padding-left: 35px;
    position: relative;
    margin-bottom: 2.5rem;
  }
  .section-title:before {
    background-color: #3e4452;
    top: 0;
    left: 0;
    bottom: 0;
    width: 15px;
    content: "";
    border-radius: 3px;
    position: absolute;
  }
  .section-title h3 {
    font-size: 18px;
    color: #111;
    text-transform: uppercase;
  }
  .section-title h2 {
    color: #3e4452;
    text-transform: uppercase;
    font-size: 28px;
  }
  .slider-anchor {
    display: block;
    position: relative;
    overflow: hidden;
    height: 400px;
    transition-property: opacity, transform;
    transition-duration: 1s;
    opacity: 1;
  }
  .img-center {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .recent-img16 {
    position: absolute;
    background-image: url(/images/p-5.jpg);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 1s ease-in-out;
  }
  .recent-content {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .recent-details {
    position: absolute;
    padding: 20px;
    color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    transition: all 0.4s ease-in-out;
  }
  .recent-title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .recent-price {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .house-details {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }
  .house-details > span {
    opacity: 0.5;
    display: inline-block;
    padding: 0 5px;
  }
  .view-proper {
    position: absolute;
    color: #fff;
    padding: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    font-size: 14px;
    letter-spacing: 1px;
    opacity: 0;
    font-weight: 400;
    transform: translateY(400%);
    transition: all 0.4s ease-in-out;
  }
  .slider-anchor:hover .recent-details {
    transform: translateY(-30%);
  }

  .slider-anchor:hover .view-proper {
    transform: translateY(0);
    opacity: 1;
  }
  .slider-anchor:hover .recent-img16 {
    transform: scale(1.06, 1.06);
  }
  #MainHome .slick-slide.slick-active {
    margin-right: 20px;
  }
  .info-help.h18 {
    padding: 9rem 0;
    background: url(../images/bg-service-home-5.jpg) no-repeat scroll center
      center;
    background-size: cover;
    position: relative;
    z-index: 0 !important;
  }

  .info-help:before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .info-help:before {
    background: transparent;
  }
  .info-text h3 {
    color: #3e4452;
    font-size: 30px;
    line-height: 45px;
    font-weight: 500;
  }
  .info-text p {
    color: #3e4452;
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
  }
  .featured-boxes-area {
    position: relative;
    z-index: 1;
    margin-top: -100px;
  }
  .featured-boxes-inner {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  .single-featured-box {
    text-align: center;
    position: relative;
    padding: 115px 25px 40px;
    overflow: hidden;
  }
  .single-featured-box .icon {
    -webkit-transition: 0.4s;
    transition: 0.4s;
    color: #ee0979;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: -12px;
  }
  img {
    display: inline-block;
    max-width: 100%;
    height: 100%;
  }
  .single-featured-box h3 {
    transition: 0.4s;
    margin: 15px 0;
    color: #333;
    font-size: 18px;
    font-weight: 500;
  }
  .single-featured-box p {
    transition: 0.4s;
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 0;
  }
  .single-featured-box .read-more-btn {
    background: linear-gradient(90deg, #000 0, #000 100%);
    -webkit-background-clip: text;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.6;
    transition: 0.6;
    font-size: 15px;
    font-weight: 400;
    text-decoration: none;
    color: #333;
  }
  .single-featured-box .read-more-btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 0;
    transition: 0.5s;
    height: 1px;
    background: linear-gradient(90deg, #18ba60 0, #18ba60 100%);
  }
  .single-featured-box:hover .icon {
    top: 23px;
    animation: 0.4s ease-in-out iconTop;
  }
  .single-featured-box:hover h3,
  .single-featured-box:hover p {
    transform: translateY(-20px);
  }
  .single-featured-box:hover .read-more-btn {
    opacity: 1;
    visibility: visible;
    bottom: 23px;
  }
  .single-featured-box .read-more-btn:hover::before {
    width: 100%;
  }

  @keyframes iconTop {
    0% {
      transform: translate(-50%, 0);
    }

    25% {
      opacity: 0;
      transform: translate(-50%, -70%);
    }
    50% {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  .popular-places {
    padding: 4.6rem 0;
    background: #fff;
  }
  .sec-title {
    text-align: center;
    padding-bottom: 2rem;
  }
  .sec-title h2 {
    color: #111;
    font-weight: 500;
    text-transform: capitalize;
  }
  .sec-title p {
    margin-top: 13px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    max-width: 550px;
  }
  .popular-places .img-box {
    height: 300px;
  }
  .popular-places .img-box {
    display: inline-block;
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: 1.5rem;
    z-index: 90;
    border-radius: 3px;
  }
  .popular-places .img-box:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    content: "";
    background-color: #121b22;
    opacity: 0.2;
    z-index: 99;
    transition: 0.3s ease-out;
  }
  .popular-places .listing-badges {
    position: absolute;
    top: 0;
    z-index: 999;
    right: 0;
    width: 100%;
    display: block;
    font-size: 16px;
    font-weight: bold;
    padding: 0px;
    overflow: hidden;
    height: 100px;
  }
  .popular-places .listing-badges .featured {
    background: #3e4452;
    transform: rotate(-45deg);
    left: -67px;
    top: 17px;
    position: relative;
    text-align: center;
    width: 200px;
    font-size: 12.5px;
    margin: 0;
    color: #fff;
    display: inline-block;
    padding: 1px 10px;
  }
  .popular-places .img-box-content {
    position: absolute;
    z-index: 101;
    top: 50%;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    visibility: visible !important;
    transform: translate(0, -50.5%);
  }
  .popular-places .img-box-content h4 {
    font-size: 20px;
    line-height: 36px;
    color: #fff;
    margin: 0;
  }
  .popular-places .img-box-content span {
    font-size: 16px;
    color: #fff;
  }
  .popular-places .hover-effect img {
    transition: all 0.8s ease;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
  }
  .popular-places .hover-effect:hover img {
    transform: scale(1.3);
  }
  .info-help.h17 {
    padding: 9rem 0;
    background: url(../images/bg-2-home-5.jpg) no-repeat scroll center center;
    background-size: cover;
    position: relative;
    z-index: 0 !important;
  }
  .info-help.h17 .info-head .info-text {
    background: #fff;
    padding: 30px;
  }
  .info-help.h17 .info-head .info-text h3 {
    color: #333;
    line-height: 32px;
  }
  .info-help.h17 .info-head .info-text h5 {
    color: #333;
    font-weight: 500;
  }
  .info-help.h17 .info-head .info-text p {
    color: #666;
  }
  .info-help .info-head .info-text p {
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    color: #fff;
    padding: 1.5rem 0;
    margin-bottom: 0px;
  }
  .info-help .info-head .info-text .btn-pro {
    background: #3e4452;
    color: #fff;
    margin-top: 10px;
    border: 0;
    transition: all 0.5s ease;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    font-weight: 400;
  }
  .inner-box {
    box-shadow: none;
  }
  .team .team-details {
    background: #fff;
    transition: all 0.4s ease;
  }
  .inner-box {
    position: relative;
    padding-bottom: 0px;
  }
  .inner-box .image {
    position: relative;
  }
  .team .team-head {
    position: relative;
    overflow: hidden;
  }
  .inner-box .image img {
    position: relative;
    width: 100%;
    display: block;
    height: auto;
  }
  .team .team-details .team-social {
    opacity: 1;
    visibility: visible;
    transform: perspective(600px) rotateY(0deg);
    background: transparent;
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    z-index: 33;
    transform-origin: left;
    transition: all 0.4s ease;
  }
  .team ul.team-social {
    margin: 0px;
  }
  .team .team-social li {
    display: block;
  }
  .team-social li a {
    background: #3e4452;
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 8px 0;
    border-bottom: 3px solid #d4cfcf;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .team-social li a img {
    width: 20px !important;
    height: 20px !important;
  }
  .team ul.team-social {
    margin: 0px;
  }
  .team .team-details .team-social {
    opacity: 1;
    visibility: visible;
    transform: perspective(600px) rotateY(0deg);
  }
  .inner-box .lower-box {
    position: relative;
    padding: 22px 0;
    text-align: center;
  }
  .inner-box .lower-box h3 a {
    position: relative;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .inner-box .lower-box h3 a:hover {
    color: #687389;
  }
  .blog-section {
    padding: 4.6rem 0;
  }
  .bg-white {
    background: #fff !important;
  }
  .blog-section .news-item-img {
    position: relative;
    width: 100%;
  }
  .blog-section .news-item-text {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .blog-section .dates {
    display: flex;
    margin-top: 0.3rem;
  }
  .blog-section .news-item .date {
    display: block;
    margin-bottom: 9px;
    font-size: 13px;
    color: #333;
  }
  .blog-section ul.action-list {
    margin-bottom: 0px;
  }
  .blog-section .action-list {
    display: flex;
    font-size: 0.8rem;
    color: #333;
    margin: 0;
  }
  .blog-section .action-item {
    /* display: inline-block; */
  }
  .blog-section .news-item-descr.big-news {
    height: 106px;
  }
  .blog-section .news-item-descr {
    margin: 6px 0px 20px 0px;
    height: 80px;
  }
  .blog-section .news-item-descr p {
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  .blog-section .news-item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .blog-section .news-link {
    color: #3e4452;
  }

  .blog-section .news-link {
    position: relative;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.25s;
  }
  .blog-section .admin {
    display: flex;
  }
  .blog-section .admin p {
    font-size: 13px;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-right: 1rem;
    margin-bottom: 0px;
  }
  .blog-section .news-item-bottom img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .blog-section .news-item h3 {
    color: #222;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.25s;
  }
  .partners {
    padding: 3rem 0;
    color: #000;
  }
  .partners img {
    width: 150px !important;
    height: 100px !important;
    opacity: 0.5;
    background: transparent;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .partners a {
    width: fit-content !important;
  }
  .nav.nav-tabs.rld-banner-tab {
    display: flex;
    justify-content: flex-start;
    border-bottom: 0;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .nav-link {
    border-radius: 8px;
    border-color: #dee2e6 #dee2e6 #fff;
    border: 0;
    height: 50px;
    line-height: 50px;
    padding: 0 35px;
    margin-right: 15px;
    position: relative;
    display: block;
    letter-spacing: 0.4px;
    font-weight: 600;
    transition: all 0.4s ease;
    background: #fff;
    color: #000;
  }
  .nav-link.active {
    background: #3e4452;
    color: #fff;
  }
  .nav-link::before {
    content: "";
    height: 20px;
    margin-left: 20px;
    position: absolute;
    top: 40px;
    width: 20px;
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }
  .nav-link.active::before {
    background: #3e4452;
  }
  .tab-content > .active {
    margin-top: 30px;
  }
  .tab-content > .active {
    display: block;
  }
  .rld-main-search {
    padding: 30px 20px 30px 20px;
    border-radius: 5px;
    margin-bottom: 0px;
    background: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.2);
    width: max-content;
  }
  .rld-single-input {
    position: relative;
    width: 280px;
  }
  .rld-single-input input {
    width: -webkit-fill-available;
    border: 1px solid #ebebeb;
    margin-right: 15px;
  }
  .rld-single-input input {
    border-radius: 8px;
    margin-left: 0px;
    outline: none;
    text-decoration: none;
  }
  .rld-single-input input {
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    border: 1px solid #d4d4d4;
    transition: all 0.4s ease;
    font-size: 15px;
  }
  /* .single-select {
    margin-bottom: 0px;
    border-radius: 8px;
    margin-right: 15px;
    border: 1px solid #ebebeb;
    box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.2);
    width: 180px;
    transition: all 0.4s ease;
    position: relative;
    padding: 0 34px 0 20px;
    height: 48px;
    line-height: 47px;
    cursor: pointer;
  }
  .single-select:before {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
    content: "";
    display: block;
    height: 8px;
    margin-top: -4px;
    pointer-events: none;
    position: absolute;
    right: 18px;
    top: 35%;
    transform-origin: 66% 66%;
    transform: rotate(45deg);
    transition: all 0.15s ease-in-out;
    width: 8px;
    left: auto;
    background-repeat: no-repeat;
    margin: 0px;
    background-size: auto;
    font-size: 20px;
    color: #687389;
  } */
  .list {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
    box-sizing: border-box;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    width: 100%;
    margin-top: 10px;
    border-right: 8px;
    z-index: 99999;
  }
  .main-input-div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .nice-select .option.focus,
  .nice-select .option.selected.focus,
  .nice-select .option:hover {
    background-color: #f6f6f6;
  }

  .nice-select .option.selected {
    font-weight: 700;
  }
  .nice-select .option {
    cursor: pointer;
    line-height: 40px;
    list-style: none;
    min-height: 40px;
    outline: 0;
    padding-left: 18px;
    padding-right: 29px;
    text-align: left;
    transition: all 0.2s;
  }
  /* .single-select.open .list {
    opacity: 1;
  } */
  section.single-proper.details {
    padding: 6rem 0 !important;
  }
  section.single-proper {
    background: #f5f7fb;
  }
  section.headings-2 {
    padding: 60px 0 55px 0;
    background: #f5f7fb;
  }
  .pro-wrapper {
    display: flex;
  }
  .headings-2 .listing-title-bar h3 {
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
    color: #222;
    text-transform: capitalize !important;
  }
  .headings-2 span.category-tag {
    font-size: 14px;
    background: #ff385c;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px 15px;
    border-radius: 50px;
    top: -3px;
    margin-left: 0.5rem;
    position: relative;
  }
  .headings-2 .listing-title-bar a,
  .headings-2 .listing-title-bar a p {
    font-size: 17px;
    text-decoration: none;
  }
  .listing-title-bar a {
    text-decoration: none;
    color: #666;
    display: flex;
    align-items: center;
  }
  .listing-address svg {
    width: 17px;
    height: 17px;
  }
  .single.detail-wrapper {
    margin-left: 15rem;
  }
  .headings-2 .listing-title-bar h4 {
    font-size: 24px;
    font-weight: 600;
    color: #ff385c;
    text-transform: capitalize !important;
  }
  .listing-title-bar a:last-child {
    text-decoration: none;
    color: #666;
  }
  .headings-2 .listing-title-bar a p {
    font-size: 17px;
    text-decoration: none;
    color: #333;
  }
  .carousel h5 {
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.25rem;
    line-height: 1.2;
  }
  .single-proper .mb-30,
  .property-location.map {
    margin-bottom: 30px !important;
  }
  .blog-info.details,
  .listing-details-sliders.mb-30,
  .homes-content.details.mb-30,
  .property-location,
  .reviews.comments,
  .reviews.leve-comments,
  .wprt-image-video.w50.pro,
  .ag-de .similar-property,
  .ag-de .portfolio.py-0.age,
  .det .similar-property {
    padding: 1.5rem !important;
    background: #fff;
    border: 1px solid #eaeff5;
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
  }
  .blog-info.details h4,
  .blog-info.details h5,
  .carousel-inner h5,
  .wprt-image-video.w50.pro h5,
  .homes-content h5 {
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.25rem;
    line-height: 1.2;
  }
  .homes-content h5::after,
  .blog-info.details h5::after,
  .property-location h5::after,
  .team.assigned h5::after,
  .carousel h5:after,
  .wprt-image-video.w50.pro h5:after,
  .similar-property h5:after,
  .ag-de .blog-section h5:after {
    color: #ff385c;
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #ff385c;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .blog-info p.mb-3 {
    color: #666;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
  }
  .homes-content .homes-list {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .homes-content .homes-list li {
    width: 33%;
    font-size: 14px;
    line-height: 36px;
    list-style: none;
    color: #0098ef;
    display: flex;
    align-items: center;
  }
  .homes-content.details .homes-list.first-ul span {
    font-size: 1rem;
    color: #555 !important;
    font-weight: 600 !important;
  }
  .homes-content.details .homes-list.first-ul .det {
    font-size: 1rem;
    color: #666 !important;
    font-weight: 400 !important;
  }
  .homes-content.details .fa {
    color: #ff385c;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 5px;
  }
  .homes-content.details .homes-list span {
    font-size: 1rem !important;
    color: #000 !important;
    font-weight: 500 !important;
  }
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
  .wprt-image-video.w50.pro {
    margin-bottom: 30px !important;
  }
  .property-nearby span {
    line-height: 16.5px;
    font-size: 13.2px;
    color: #666;
  }
  .text-info {
    color: #17a2b8 !important;
  }
  .property-nearby b.title {
    font-size: 15.5px;
  }
  .property-nearby h6 {
    font-size: 13.2px;
    font-weight: 600;
  }
  .property-nearby span {
    line-height: 16.5px;
    font-size: 13.2px;
    color: #666;
  }
  .list-inline {
    line-height: 15px;
  }
  .text-warning {
    color: #ffc107 !important;
  }
  .list-inline-item {
    display: inline-block;
  }
  .text-success {
    color: #28a745 !important;
  }
  .text-danger {
    color: #dc3545 !important;
  }
  .property .popup-youtube {
    background: #fff none repeat scroll 0 0;
    border-radius: 100%;
    color: #ff385c;
    font-size: 30px;
    height: 70px;
    left: 50%;
    line-height: 70px;
    position: absolute;
    text-align: center;
    top: 57%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 70px;
    z-index: 9;
  }
  .property.wprt-image-video .iq-waves {
    height: 352px;
    height: 22rem;
    left: 50%;
    position: absolute;
    top: 57%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 352px;
    width: 22rem;
    z-index: 2;
  }
  .property.wprt-image-video .iq-waves .waves {
    animation: 3s ease-in-out 0s normal none infinite running waves;
    background: rgba(255, 255, 255, 0.2) none repeat scroll 0 0 padding-box;
    border-radius: 320px;
    height: 22rem;
    opacity: 0;
    position: absolute;
    width: 22rem;
  }
  .property.wprt-image-video .iq-waves .wave-1 {
    animation-delay: 0s;
  }
  .property.wprt-image-video .iq-waves .wave-2 {
    animation-delay: 1s;
  }
  .property.wprt-image-video .iq-waves .wave-3 {
    animation-delay: 2s;
  }
  .blog .property-location h5 {
    color: #000;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    font-weight: 600;
    text-transform: capitalize;
  }
  section.reviews.comments h3 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    line-height: 1.2;
  }
  .comments h3::after,
  .leve-comments h3::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #ff385c;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .commented .comm-inf {
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
  }
  .commented img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 2rem;
  }
  .comments-info .conra {
    display: flex;
    justify-content: space-between;
  }
  .comments-info h5 {
    color: #ff385c;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.2;
  }
  .the-icons span {
    color: #666 !important;
  }
  .detail-list-rating i {
    color: #ffc107;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px / 1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .commented .rest img {
    width: 165px;
    height: 110px;
    margin-top: 12px;
    border-radius: 5px;
    margin-right: 15px;
  }
  .resti {
    display: flex;
  }
  .w50.pro {
    margin-bottom: 30px;
  }
  .leave-rating {
    height: 24px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .leave-rating input[type="radio"] {
    display: none;
  }

  input[type="checkbox"],
  input[type="radio"] {
    width: auto;
    margin-right: 5px;
  }
  .leave-rating label {
    font-size: 20px;
    float: right;
    letter-spacing: 4px;
    color: #dadada;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .leave-rating label:hover,
  .leave-rating label:hover ~ label {
    color: #ffc600 !important;
  }
  .leave-rating input[type="radio"]:checked ~ label {
    color: #ffc600;
  }
  .add-review-photos {
    font-weight: 600;
    padding: 6px 7px;
    color: #fff;
    border: 0px;
    background-color: #ff385c;
    border-radius: 50px;
    display: inline-block;
    position: relative;
    font-size: 14px;
    width: auto;
    transition: 0.3s;
    cursor: pointer;
    line-height: 20px;
    top: -25px;
    float: right;
  }
  .photoUpload {
    position: relative;
    overflow: hidden;
    padding: 3px 12px;
    cursor: pointer;
  }
  .add-review-photos i {
    color: #66676b;
    margin-right: 3px;
    transition: 0.3s;
    font-size: 16px;
    position: relative;
    top: 2px;
  }
  .photoUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity = 0);
  }

  input[type="file"] {
    background: white;
    border: none;
    padding: 5px 0px 5px 0px;
    width: auto;
    display: inline-block;
  }
  .add-review-photos:hover {
    color: #fff;
    background-color: #121b22;
  }
  .leve-comments .btn {
    background: #ff385c;
    cursor: pointer;
    font-size: 16px;
    border: none;
    transition: all 0.5s ease;
    display: inline-block;
    font-weight: 400;
    color: #fff;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
  .leve-comments .btn:hover {
    background: #121b22;
    color: #fff;
  }
  .project-single .img-responsive {
    border-radius: 10px 10px 0 0;
  }
  .project-single {
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    border: 1px solid #e7e7e7;
  }
  .project-single .homes-content {
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
    background: #fff !important;
    padding: 20px 20px !important;
  }
  .single.reviews.leve-comments {
    margin-top: 0px;
    margin-bottom: 60px;
  }
  .similar-property h5 {
    color: #000;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media (max-width: 767px) {
    .homes-content .homes-list li {
      width: 100%;
    }
  }
  .the-icons img {
    width: 18px;
  }
  .footer a img {
    width: 40px;
  }
  .netsocials img {
    width: 16px;
    height: 16px !important;
  }
  .widget-boxed {
    border-radius: 6px;
    padding: 1.5rem;
    transform: translate3d(0, 0, 0);
    z-index: 90;
    margin-bottom: 0px;
    position: relative;
    border: 1px solid #eaeff5;
  }
  .widget-boxed {
    box-shadow: 0px 0px 2px #e7e7e7 !important;
  }
  .widget-boxed {
    background: #fff;
  }
  .widget-boxed-header {
    padding-bottom: 1.5rem;
    padding-top: 0px;
    border-bottom: 1px solid #eaeff5;
  }
  .widget-boxed-header h4 {
    color: #222 !important;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
  }
  .widget-boxed-body {
    padding: 1.5rem 0 0;
  }
  .sidebar-widget .author-box {
    margin-bottom: 15px;
    display: flex;
  }
  .sidebar-widget .author-box img {
    width: 85px;
    height: 85px;
    border: 4px solid #fff;
    margin-right: 15px;
    box-shadow: 0 0 40px rgba(82, 85, 90, 0.1);
    border-radius: 50%;
  }
  .sidebar-widget .author-box .author__title {
    margin-top: 18px;
    font-size: 18px;
  }

  .sidebar-widget .author__title {
    font-size: 18px;
    color: #222;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 2px;
  }
  .sidebar-widget .author__meta {
    font-size: 15px;
    color: #666;
    font-weight: 400;
  }
  .sidebar-widget ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .author-name {
    display: flex;
    flex-direction: column;
  }
  .sidebar-widget .author__contact li {
    color: #666;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 15px;
  }
  .sidebar-widget .author__contact li span i {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    color: #ff385c;
    border-radius: 50%;
    font-size: 18px;
    margin-right: 10px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .sidebar-widget .author__contact li a {
    color: #666;
    text-decoration: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .sidebar-widget .author__contact li a:hover {
    color: #ff385c;
  }
  .agent-contact-form-sidebar {
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid #eeeeee;
  }
  .agent-contact-form-sidebar h4 {
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
    line-height: 1.2;
  }
  .agent-contact-form-sidebar input {
    width: -webkit-fill-available;
    border: 1px solid #dae2e9;
    background-color: #fff;
    padding: 15px;
    font-size: 14px;
    color: #7e8c99;
    margin-bottom: 1rem;
  }
  .agent-contact-form-sidebar textarea {
    border: 1px solid #dae2e9 !important;
    background-color: #fff;
    padding-left: 15px;
    width: -webkit-fill-available;
    height: 100px;
    color: #7e8c99;
  }
  input,
  textarea,
  select {
    padding: 9px;
    border-radius: 5px;
    font-weight: 400;
    /* background: #f8f8f8; */
  }
  .agent-contact-form-sidebar .multiple-send-message {
    background-color: #ff385c;
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    text-transform: capitalize;
    padding-top: 12px;
    margin-top: 10px;
    margin-bottom: 0px;
    transition: all 0.3s ease;
  }
  .agent-contact-form-sidebar .multiple-send-message:hover {
    background-color: #121b22;
  }
  .recent-main {
    display: flex;
    flex: 0 1 100%;
  }
  .recent-img img {
    width: 90px;
    height: 70px;
    margin-right: 1rem;
  }
  .info-img a {
    text-decoration: none;
    color: #000;
    font-size: 15px;
    transition: all 0.5s ease;
  }
  .info-img a h6 {
    font-size: 15px;
  }
  #BlogDetailPage .headings {
    background: linear-gradient(rgba(18, 27, 34, 0.6), rgba(18, 27, 34, 0.6)),
      url(../images/bg-details.jpg) no-repeat center center;
    width: 100%;
    height: 30vh;
  }
  .blog-section {
    padding: 6rem 0;
  }
  .news-item.details {
    background: transparent;
  }
  section.leve-comments {
    margin-top: 4rem;
  }
  .font-weight-bold {
    font-weight: 700 !important;
    color: #444;
    font-size: 1.25rem;
    line-height: 1.2;
  }
  .widget h5::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #ff385c;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .input-group {
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .custom-select:not(:last-child),
  .input-group > .form-control:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .form-control {
    padding: 0.7rem;
    border: 1px solid #dddddd;
  }
  .input-group-btn .btn-primary {
    background: #ff385c;
    border: 1px solid #ff385c;
    cursor: pointer;
    transition: all 0.5s ease;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    display: inline-block;
    font-weight: 400;
    height: 100%;
  }
  .input-group-btn .fa {
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
  }
  .recent-post ul li {
    list-style: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
  }
  .recent-post ul li a {
    text-decoration: none;
    color: #666;
    transition: all 0.5s ease;
  }
  .recent-post ul li .fa {
    margin-right: 1rem;
  }
  @media screen and (max-width: 767px) {
    .widget {
      padding-top: 3.5rem !important;
    }
  }

  .single-select {
    margin-bottom: 0px;
    border-radius: 8px;
    margin-right: 15px;
    border: 1px solid #ebebeb;
    box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.2);
    transition: all 0.4s ease;
    position: relative;
    padding: 0 34px 0 20px;
    height: 48px;
    line-height: 47px;
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    display: block;
    float: left;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    background-color: #fff;
  }
  .single-select {
    width: 180px;
  }
  .btn.btn-yellow {
    height: 48px;
    line-height: 48px;
    padding: 0 30px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    border: 0px solid #687389;
    font-size: 14px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    font-weight: 600;
    background: #3e4452;
    width: 100%;
    box-shadow: 0px 1px 4px 0px rgba(255, 90, 95, 0.3);
    color: #ffffff;
    display: inline-block;
    text-align: center;
    width: auto;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .nav-links {
      display: none;
      position: absolute;
      top: 97%;
      left: 0;
      width: -webkit-fill-available;
      background-color: #ffffff;
      padding: 20px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      height: 100vh;
    }

    .nav-links.open {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
    }

    .nav-links li {
      margin-bottom: 15px;
    }

    .menu-icon {
      display: block;
    }

    .add-listing {
      display: none;
    }
  }

  @media (max-width: 991px) {
    .rld-single-input {
      width: 100%;
      margin-bottom: 15px;
    }
    .single-select {
      width: 100%;
      margin-bottom: 15px;
    }
    .pro-wrapper {
      flex-direction: column;
      align-items: flex-start;
    }
    .single.detail-wrapper {
      margin-left: 0;
    }
  }

  @media (max-width: 420px) {
    .rld-single-input {
      width: 303px;
    }
  }

  @media (max-width: 375px) {
    .banner-inner h5 {
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 16px;
    }
    .banner-inner h1 {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      margin-bottom: 5px;
      text-transform: capitalize;
    }
    .headings h1 {
      margin-top: 4.5rem;
      font-size: 26px;
      color: #fff;
    }
  }

  @media (max-width: 389px) {
    .headings-2 span.category-tag {
      display: block;
      text-align: center;
    }
  }
  #banner {
    position: relative;
  }
  .banner-inner-wrap {
  }
`;

export default FindHouseStyled;
