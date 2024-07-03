import React, { useState } from "react";
import Link from "next/link";
import SlickSlider from "../SlickSlider";
import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "react-feather";
import ClientSlider from "../ClientSlider";

interface Props {
  homePageData?: any;
}

const HomePage = (props: Props) => {
  const [activeTab, setActiveTab] = useState("tabs_1");
  const [selectedOption, setSelectedOption] = useState("Property Type");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectChange = (option: any) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    console.log("selectedOption", selectedOption);
  };

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };
  return (
    <div id="MainHome">
      <div id="banner">
        <video id="video" loop muted playsInline autoPlay className="headervid">
          <source
            src="https://www.dynamiccables.co.in/video/factory.mp4"
            type="video/mp4"
          />
        </video>
        <div className="banner-inner-wrap">
          <div className="container bx-brd-box ">
            <div className="row">
              <div className="col-12">
                <div className="banner-inner text-center">
                  <h1>Find Your Dream Home</h1>
                  <h5>We Have Over Million Properties For You</h5>
                </div>
              </div>
              <div className="col-12">
                <div className="banner-search-wrap">
                  <ul className="nav nav-tabs rld-banner-tab">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${activeTab === "tabs_1" ? "active" : ""
                          }`}
                        onClick={() => handleTabClick("tabs_1")}
                        data-toggle="tab"
                        href="#tabs_1"
                      >
                        For Sale
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${activeTab === "tabs_2" ? "active" : ""
                          }`}
                        onClick={() => handleTabClick("tabs_2")}
                        data-toggle="tab"
                        href="#tabs_2"
                      >
                        For Rent
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade active show">
                      <div className="rld-main-search">
                        <div className="row">
                          <div className="main-input-div">
                            <div className="rld-single-input">
                              <input
                                type="text"
                                placeholder="Enter Keyword..."
                              />
                            </div>
                            <select name="" id="" className="single-select">
                              <option value="0">Property Type</option>
                            </select>
                            <select name="" id="" className="single-select">
                              <option value="0">Location</option>
                            </select>
                            <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                              <a className="btn btn-yellow" href="#">
                                Search Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="recent-properties" className="bg-white-3">
        <div className="container-fluid bx-brd-box recently-slider">
          <div className="section-title">
            <h3>Recent</h3>
            <h2>Properties</h2>
          </div>
          <SlickSlider>
            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>

            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>

            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>

            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>

            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>

            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>

            <Link href="#" className="slider-anchor">
              <div className="recent-img16 img-center"></div>
              <div className="recent-content"></div>
              <div className="recent-details">
                <div className="recent-title">Luxury House</div>
                <div className="recent-price">$230,000</div>
                <div className="house-details">
                  6 Bed <span>|</span> 3 Bath <span>|</span> 720 sq ft
                </div>
              </div>
              <div className="view-proper">View Details</div>
            </Link>
          </SlickSlider>
        </div>
      </div>
      <div className="info-help h18">
        <div className="container bx-brd-box ">
          <div className="row info-head">
            <div className="col-lg-12 col-md-8 col-xs-8">
              <div className="info-text">
                <h3 className="text-center mb-0">Why Choose Us</h3>
                <p className="text-center mb-4 p-0">
                  We offer perfect real estate services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-boxes-area">
        <div className="container bx-brd-box ">
          <div className="featured-boxes-inner">
            <div className="row m-0">
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <Image
                      src="/images/i-5.svg"
                      width={85}
                      height={85}
                      alt=""
                    />
                  </div>
                  <h3 className="mt-5">Find Your Home</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <Link className="read-more-btn" href="#">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <Image
                      src="/images/i-6.svg"
                      width={85}
                      height={85}
                      alt=""
                    />
                  </div>
                  <h3 className="mt-5">Trusted by thousands</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <Link className="read-more-btn" href="#">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <Image
                      src="/images/i-7.svg"
                      width={85}
                      height={85}
                      alt=""
                    />
                  </div>
                  <h3 className="mt-5">Financing made easy</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <Link className="read-more-btn" href="#">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <Image
                      src="/images/i-8.svg"
                      width={85}
                      height={85}
                      alt=""
                    />
                  </div>
                  <h3 className="mt-5">24/7 support</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <Link className="read-more-btn" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-places">
        <div className="container bx-brd-box ">
          <div className="sec-title">
            <h2>
              <span>Popular </span>Places
            </h2>
            <p>Properties In Most Popular Places.</p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <Link href="#" className="img-box hover-effect">
                <Image
                  width={500}
                  height={500}
                  src="/images/12.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <div className="img-box-content">
                  <h4>New York City </h4>
                  <span>203 Properties</span>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-4">
              <Link href="#" className="img-box hover-effect">
                <Image
                  width={500}
                  height={500}
                  src="/images/13.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="img-box-content">
                  <h4>Los Angeles </h4>
                  <span>307 Properties</span>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-4">
              <Link href="#" className="img-box hover-effect">
                <Image
                  width={500}
                  height={500}
                  src="/images/14.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="img-box-content">
                  <h4>San Francisco </h4>
                  <span>409 Properties</span>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-4">
              <Link href="#" className="img-box hover-effect">
                <Image
                  width={500}
                  height={500}
                  src="/images/15.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="img-box-content">
                  <h4>Miami </h4>
                  <span>145 Properties</span>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-4">
              <Link href="#" className="img-box hover-effect">
                <Image
                  width={500}
                  height={500}
                  src="/images/10.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="img-box-content">
                  <h4>Chicago </h4>
                  <span>276 Properties</span>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-4">
              <Link href="#" className="img-box hover-effect">
                <Image
                  width={500}
                  height={500}
                  src="/images/5.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <div className="img-box-content">
                  <h4>Houston </h4>
                  <span>321 Properties</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="info-help h17">
        <div className="container bx-brd-box ">
          <div className="row info-head">
            <div className="col-lg-6 col-md-8 col-xs-8" data-aos="fade-right">
              <div className="info-text">
                <h3>Apartment for rent</h3>
                <h5 className="mt-3">$6,400/month</h5>
                <p className="pt-2">
                  We Help you find the best places and offer near you. Bring to
                  the table win-win survival strategies to ensure proactive
                  domination going forward.
                </p>
                <div className="inf-btn pro">
                  <Link href="#" className="btn btn-pro btn-secondary btn-lg">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="recent-properties" className="team bg-white-3">
        <div className="container-fluid bx-brd-box recently-slider">
          <div className="section-title">
            <h3>MEET OUR</h3>
            <h2>AGENTS</h2>
          </div>
          <SlickSlider>
            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>

            <div className="inner-box team-details">
              <div className="image team-head">
                <Link href="#">
                  <Image
                    width={260}
                    height={260}
                    src="/images/t-5.jpg"
                    alt=""
                  />
                </Link>
                <div className="team-hover">
                  <ul className="team-social">
                    <li>
                      <Link href="#" className="facebook">
                        <Image
                          src="/images/facebook.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="twitter">
                        <Image
                          src="/images/twitter.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="instagram">
                        <Image
                          src="/images/instagram.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="linkedin">
                        <Image
                          src="/images/linkedin.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lower-box">
                <h3>
                  <Link href="#">Carls Jhons</Link>
                </h3>
                <div className="designation">Real Estate Agent</div>
              </div>
            </div>
          </SlickSlider>
        </div>
      </div>
      <div className="blog-section bg-white">
        <div className="container bx-brd-box ">
          <div className="sec-title">
            <h2>
              <span>Articles</span>Tips
            </h2>
            <p>Read the latest news from our blog.</p>
          </div>
          <div className="news-wrap">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-xs-12">
                <div className="news-item">
                  <Link href="#" className="news-img-link">
                    <div className="news-item-img">
                      <Image
                        width={1000}
                        height={750}
                        className="img-responsive"
                        src="/images/b-10.jpg"
                        alt="blog image"
                      />
                    </div>
                  </Link>
                  <div className="news-item-text">
                    <Link href="#">
                      <h3>Explore The World</h3>
                    </Link>
                    <div className="dates">
                      <span className="date">April 11, 2020 /</span>
                      <ul className="action-list pl-0">
                        <li className="action-item pl-2">
                          <Heart color="#3e4452" width={12} height={12} />
                          <span>306</span>
                        </li>
                        <li className="action-item pl-2">
                          <MessageCircle
                            color="#3e4452"
                            width={12}
                            height={12}
                          />
                          <span>34</span>
                        </li>
                        <li className="action-item pl-2">
                          <Share2 color="#3e4452" width={12} height={12} />
                          <span>122</span>
                        </li>
                      </ul>
                    </div>
                    <div className="news-item-descr big-news">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                    <div className="news-item-bottom">
                      <Link href="#" className="news-link">
                        Read more...
                      </Link>
                      <div className="admin">
                        <p>By, Karl Smith</p>
                        <Image
                          width={250}
                          height={250}
                          src="/images/ts-6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-xs-12">
                <div className="news-item">
                  <Link href="#" className="news-img-link">
                    <div className="news-item-img">
                      <Image
                        width={1000}
                        height={750}
                        className="img-responsive"
                        src="/images/b-10.jpg"
                        alt="blog image"
                      />
                    </div>
                  </Link>
                  <div className="news-item-text">
                    <Link href="#">
                      <h3>Explore The World</h3>
                    </Link>
                    <div className="dates">
                      <span className="date">April 11, 2020 /</span>
                      <ul className="action-list pl-0">
                        <li className="action-item pl-2">
                          <Heart color="#3e4452" width={12} height={12} />
                          <span>306</span>
                        </li>
                        <li className="action-item pl-2">
                          <MessageCircle
                            color="#3e4452"
                            width={12}
                            height={12}
                          />
                          <span>34</span>
                        </li>
                        <li className="action-item pl-2">
                          <Share2 color="#3e4452" width={12} height={12} />
                          <span>122</span>
                        </li>
                      </ul>
                    </div>
                    <div className="news-item-descr big-news">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                    <div className="news-item-bottom">
                      <Link href="#" className="news-link">
                        Read more...
                      </Link>
                      <div className="admin">
                        <p>By, Karl Smith</p>
                        <Image
                          width={250}
                          height={250}
                          src="/images/ts-6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-xs-12">
                <div className="news-item">
                  <Link href="#" className="news-img-link">
                    <div className="news-item-img">
                      <Image
                        width={1000}
                        height={750}
                        className="img-responsive"
                        src="/images/b-10.jpg"
                        alt="blog image"
                      />
                    </div>
                  </Link>
                  <div className="news-item-text">
                    <Link href="#">
                      <h3>Explore The World</h3>
                    </Link>
                    <div className="dates">
                      <span className="date">April 11, 2020 /</span>
                      <ul className="action-list pl-0">
                        <li className="action-item pl-2">
                          <Heart color="#3e4452" width={12} height={12} />
                          <span>306</span>
                        </li>
                        <li className="action-item pl-2">
                          <MessageCircle
                            color="#3e4452"
                            width={12}
                            height={12}
                          />
                          <span>34</span>
                        </li>
                        <li className="action-item pl-2">
                          <Share2 color="#3e4452" width={12} height={12} />
                          <span>122</span>
                        </li>
                      </ul>
                    </div>
                    <div className="news-item-descr big-news">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                    <div className="news-item-bottom">
                      <Link href="#" className="news-link">
                        Read more...
                      </Link>
                      <div className="admin">
                        <p>By, Karl Smith</p>
                        <Image
                          width={250}
                          height={250}
                          src="/images/ts-6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners bg-white-3">
        <div className="container bx-brd-box ">
          <div className="sec-title">
            <h2>
              <span>Our </span>Partners
            </h2>
            <p>The Companies That Represent Us.</p>
          </div>
          <ClientSlider>
            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>

            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>

            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>

            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>

            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>

            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>

            <Link href="">
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </Link>
          </ClientSlider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
