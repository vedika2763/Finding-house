import React from "react";
import Link from "next/link";
import {
  AlignLeft,
  Film,
  Grid,
  Home,
  Link2,
  List,
  MapPin,
  Video,
} from "react-feather";
import Image from "next/image";
import PropertySlider from "./PropertySlider";

type Props = {};

const ListingHome = (props: Props) => {
  return (
    <div id="ListingHouse">
      <div className="container bx-brd-box">
        <div className="text-heading text-left headings-2">
          <p className="pb-2">
            <Link className="mr-1" href="/">
              Home
            </Link>
            / <span className="ml-1">Listings</span>
          </p>
          <h3>List View</h3>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 blog-pots">
            <div className="headings-2 pt-0 mt-3">
              <div className="pro-wrapper">
                <p className="search-result mb-0">7 Search results</p>
                <div className="single-detail-wrapper">
                  <div className="shortBy">
                    <AlignLeft
                      color="#495057"
                      width={20}
                      height={20}
                      className="pr-2"
                    />
                    shortby:
                  </div>
                  <select name="" id="selectShortBy">
                    <option value="0">Top Selling</option>
                    <option value="1">Most Viewed</option>
                    <option value="2">Price(low to high)</option>
                    <option value="3">Price(high to low)</option>
                  </select>
                  <div className="sorting-options">
                    <Link href="#" className="change-view-btn active-view-btn">
                      <List />
                    </Link>
                    <Link href="#" className="change-view-btn">
                      <Grid />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row featured portfolio-items">
              <div className="house-view-card mb-5">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 landscapes-image">
                    <div className="project-inner project-head">
                      <div className="homes">
                        <Link href="#" className="homes-img">
                          <div className="homes-tag button alt featured">
                            Featured
                          </div>
                          <div className="homes-tag button alt sale">
                            For Sale
                          </div>
                          <div className="homes-price">$900</div>
                          <Image
                            width={1000}
                            height={750}
                            src="/images/b-11.jpg"
                            alt="home-1"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link href="#" className="btn">
                          <Link2 />
                        </Link>
                        <Link
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <Video />
                        </Link>
                        <Link href="#" className="img-poppu btn">
                          <Film />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 homes-content">
                    <div className="py-3 pr-3">
                      <h3>
                        <Link href="/property-detail">Real House Luxury Villa</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link href="#">
                          <MapPin
                            color="#666"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          <span>Est St, 77 - Central Park South, NYC</span>
                        </Link>
                      </p>
                      <ul className="homes-list pb-3">
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bed.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bath.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/square.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/car.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="agent-details.html">
                          <Image
                            width={40}
                            height={40}
                            src="/images/ts-1.jpg"
                            alt=""
                            className="mr-2"
                          />
                          Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="house-view-card mb-5">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 landscapes-image">
                    <div className="project-inner project-head">
                      <div className="homes">
                        <Link href="#" className="homes-img">
                          <div className="homes-tag button alt featured">
                            Featured
                          </div>
                          <div className="homes-tag button alt sale">
                            For Sale
                          </div>
                          <div className="homes-price">$900</div>
                          <Image
                            width={1000}
                            height={750}
                            src="/images/b-11.jpg"
                            alt="home-1"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link href="#" className="btn">
                          <Link2 />
                        </Link>
                        <Link
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <Video />
                        </Link>
                        <Link href="#" className="img-poppu btn">
                          <Film />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 homes-content">
                    <div className="py-3 pr-3">
                      <h3>
                        <Link href="/property-detail">Real House Luxury Villa</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link href="#">
                          <MapPin
                            color="#666"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          <span>Est St, 77 - Central Park South, NYC</span>
                        </Link>
                      </p>
                      <ul className="homes-list pb-3">
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bed.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bath.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/square.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/car.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="agent-details.html">
                          <Image
                            width={40}
                            height={40}
                            src="/images/ts-1.jpg"
                            alt=""
                            className="mr-2"
                          />
                          Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="house-view-card mb-5">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 landscapes-image">
                    <div className="project-inner project-head">
                      <div className="homes">
                        <Link href="#" className="homes-img">
                          <div className="homes-tag button alt featured">
                            Featured
                          </div>
                          <div className="homes-tag button alt sale">
                            For Sale
                          </div>
                          <div className="homes-price">$900</div>
                          <Image
                            width={1000}
                            height={750}
                            src="/images/b-11.jpg"
                            alt="home-1"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link href="#" className="btn">
                          <Link2 />
                        </Link>
                        <Link
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <Video />
                        </Link>
                        <Link href="#" className="img-poppu btn">
                          <Film />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 homes-content">
                    <div className="py-3 pr-3">
                      <h3>
                        <Link href="/property-detail">Real House Luxury Villa</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link href="#">
                          <MapPin
                            color="#666"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          <span>Est St, 77 - Central Park South, NYC</span>
                        </Link>
                      </p>
                      <ul className="homes-list pb-3">
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bed.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bath.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/square.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/car.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="agent-details.html">
                          <Image
                            width={40}
                            height={40}
                            src="/images/ts-1.jpg"
                            alt=""
                            className="mr-2"
                          />
                          Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="house-view-card mb-5">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 landscapes-image">
                    <div className="project-inner project-head">
                      <div className="homes">
                        <Link href="#" className="homes-img">
                          <div className="homes-tag button alt featured">
                            Featured
                          </div>
                          <div className="homes-tag button alt sale">
                            For Sale
                          </div>
                          <div className="homes-price">$900</div>
                          <Image
                            width={1000}
                            height={750}
                            src="/images/b-11.jpg"
                            alt="home-1"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link href="#" className="btn">
                          <Link2 />
                        </Link>
                        <Link
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <Video />
                        </Link>
                        <Link href="#" className="img-poppu btn">
                          <Film />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 homes-content">
                    <div className="py-3 pr-3">
                      <h3>
                        <Link href="/property-detail">Real House Luxury Villa</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link href="#">
                          <MapPin
                            color="#666"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          <span>Est St, 77 - Central Park South, NYC</span>
                        </Link>
                      </p>
                      <ul className="homes-list pb-3">
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bed.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bath.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/square.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/car.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="agent-details.html">
                          <Image
                            width={40}
                            height={40}
                            src="/images/ts-1.jpg"
                            alt=""
                            className="mr-2"
                          />
                          Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="house-view-card mb-5">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 landscapes-image">
                    <div className="project-inner project-head">
                      <div className="homes">
                        <Link href="#" className="homes-img">
                          <div className="homes-tag button alt featured">
                            Featured
                          </div>
                          <div className="homes-tag button alt sale">
                            For Sale
                          </div>
                          <div className="homes-price">$900</div>
                          <Image
                            width={1000}
                            height={750}
                            src="/images/b-11.jpg"
                            alt="home-1"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link href="#" className="btn">
                          <Link2 />
                        </Link>
                        <Link
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <Video />
                        </Link>
                        <Link href="#" className="img-poppu btn">
                          <Film />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 homes-content">
                    <div className="py-3 pr-3">
                      <h3>
                        <Link href="/property-detail">Real House Luxury Villa</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link href="#">
                          <MapPin
                            color="#666"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          <span>Est St, 77 - Central Park South, NYC</span>
                        </Link>
                      </p>
                      <ul className="homes-list pb-3">
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bed.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bath.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/square.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/car.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="agent-details.html">
                          <Image
                            width={40}
                            height={40}
                            src="/images/ts-1.jpg"
                            alt=""
                            className="mr-2"
                          />
                          Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="house-view-card mb-5">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 landscapes-image">
                    <div className="project-inner project-head">
                      <div className="homes">
                        <Link href="#" className="homes-img">
                          <div className="homes-tag button alt featured">
                            Featured
                          </div>
                          <div className="homes-tag button alt sale">
                            For Sale
                          </div>
                          <div className="homes-price">$900</div>
                          <Image
                            width={1000}
                            height={750}
                            src="/images/b-11.jpg"
                            alt="home-1"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link href="#" className="btn">
                          <Link2 />
                        </Link>
                        <Link
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <Video />
                        </Link>
                        <Link href="#" className="img-poppu btn">
                          <Film />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 homes-content">
                    <div className="py-3 pr-3">
                      <h3>
                        <Link href="/property-detail">Real House Luxury Villa</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link href="#">
                          <MapPin
                            color="#666"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          <span>Est St, 77 - Central Park South, NYC</span>
                        </Link>
                      </p>
                      <ul className="homes-list pb-3">
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bed.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/bath.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/square.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                          <Image
                            className="mr-2"
                            src="/images/car.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="footer">
                        <a href="agent-details.html">
                          <Image
                            width={40}
                            height={40}
                            src="/images/ts-1.jpg"
                            alt=""
                            className="mr-2"
                          />
                          Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 car">
            <div>
              <div className="main-search-field white-box">
                <div className="boxed-header">
                  <h4>Find Your House</h4>
                </div>
                <form action="">
                  <div className="form-group looking">
                    <div className="main-search-input-item">
                      <input
                        type="text"
                        placeholder="Enter Keyword..."
                        value=""
                      />
                    </div>
                  </div>

                  <div className="form-group looking">
                    <div className="main-search-input-item">
                      <MapPin width={16} height={18} />
                      <select name="" id="">
                        <option value="0">Location</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group looking">
                    <div className="main-search-input-item">
                      <Home width={16} height={18} />
                      <select name="" id="">
                        <option value="0">Property Type</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group looking">
                    <div className="main-search-input-item">
                      <Home width={16} height={18} />
                      <select name="" id="">
                        <option value="0">Property Status</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group looking">
                    <div className="main-search-input-item">
                      <Image
                        src="/images/bed.svg"
                        alt=""
                        width={16}
                        height={18}
                      />
                      <select name="" id="">
                        <option value="0">Bedrooms</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group looking">
                    <div className="main-search-input-item">
                      <Image
                        src="/images/bath.svg"
                        alt=""
                        width={16}
                        height={18}
                      />
                      <select name="" id="">
                        <option value="0">Bathrooms</option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className="col-lg-12 no-pds">
                  <div className="at-col-default-mar">
                    <button
                      className="btn btn-default hvr-bounce-to-right"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="white-box mt-5">
                <div className="boxed-header mb-5">
                  <h4>Feature Properties</h4>
                </div>
                <PropertySlider>
                  <div className="listing-item compact">
                    <Link href="#" className="listing-img-container">
                      <div className="listing-badges">
                        <span className="featured">$ 230,000</span>
                        <span>For Sale</span>
                      </div>
                      <div className="listing-img-content">
                        <span className="listing-compact-title">
                          House Luxury <i>New York</i>
                        </span>
                        <ul className="listing-hidden-content">
                          <li>
                            Area <span>720 sq ft</span>
                          </li>
                          <li>
                            Rooms <span>6</span>
                          </li>
                          <li>
                            Beds <span>2</span>
                          </li>
                          <li>
                            Baths <span>3</span>
                          </li>
                        </ul>
                      </div>
                      <Image
                        width={1000}
                        height={750}
                        src="/images/fp-1.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="listing-item compact">
                    <Link href="#" className="listing-img-container">
                      <div className="listing-badges">
                        <span className="featured">$ 230,000</span>
                        <span>For Sale</span>
                      </div>
                      <div className="listing-img-content">
                        <span className="listing-compact-title">
                          House Luxury <i>New York</i>
                        </span>
                        <ul className="listing-hidden-content">
                          <li>
                            Area <span>720 sq ft</span>
                          </li>
                          <li>
                            Rooms <span>6</span>
                          </li>
                          <li>
                            Beds <span>2</span>
                          </li>
                          <li>
                            Baths <span>3</span>
                          </li>
                        </ul>
                      </div>
                      <Image
                        width={1000}
                        height={750}
                        src="/images/fp-1.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                </PropertySlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingHome;
