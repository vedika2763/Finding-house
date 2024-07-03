import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Film, Link2, MapPin, Video } from "react-feather";
import PropertyDetailSlider from "./propertyDetailSlider/propertyDetailSlider";
import PropertySlider from "../propertyHome/PropertySlider";

type Props = {};

const PropertyDetail = (props: Props) => {
  return (
    <section className="single-proper blog details">
      <div className="container bx-brd-box ">
        <div className="row">
          <div className="col-lg-8 col-md-12 blog-pots">
            <div className="row">
              <div className="col-md-12">
                <section className="headings-2 pt-0">
                  <div className="pro-wrapper">
                    <div className="detail-wrapper-body">
                      <div className="listing-title-bar">
                        <h3>
                          Luxury Villa House{" "}
                          <span className="mrg-l-5 category-tag">For Sale</span>
                        </h3>
                        <div className="mt-0">
                          <a href="#" className="listing-address">
                            <MapPin className="pr-2" />
                            77 - Central Park South, NYC
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single detail-wrapper mr-2">
                      <div className="detail-wrapper-body">
                        <div className="listing-title-bar">
                          <h4>$ 230,000</h4>
                          <div className="mt-0">
                            <a href="" className="listing-address">
                              <p>$ 1,200 / sq ft</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  id="listingDetailsSlider"
                  className="carousel listing-details-sliders slide mb-30"
                >
                  <h5 className="mb-4">Gallery</h5>
                  <PropertyDetailSlider>
                    <img src="/images/s-1.jpg" alt="" />
                    <img src="/images/s-1.jpg" alt="" />
                    <img src="/images/s-1.jpg" alt="" />
                    <img src="/images/s-1.jpg" alt="" />
                    <img src="/images/s-1.jpg" alt="" />
                  </PropertyDetailSlider>
                </div>

                <div className="blog-info details mb-30">
                  <h5 className="mb-4">Description</h5>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum rerum beatae consequatur, totam fugit, alias fuga
                    aliquam quod tempora a nisi esse magnam nulla quas! Error
                    praesentium, vero dolorum laborum. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Cum rerum beatae
                    consequatur, totam fugit.
                  </p>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum rerum beatae consequatur, totam fugit, alias fuga
                    aliquam quod tempora a nisi esse magnam nulla quas! Error
                    praesentium, vero dolorum laborum. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Cum rerum beatae
                    consequatur, totam fugit.
                  </p>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum rerum beatae consequatur, totam fugit, alias fuga
                    aliquam quod tempora a nisi esse magnam nulla quas! Error
                    praesentium, vero dolorum laborum. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Cum rerum beatae
                    consequatur, totam fugit.
                  </p>
                </div>

                <div className="single homes-content details mb-30">
                  <h5 className="mb-4">Property Details</h5>
                  <ul className="homes-list first-ul clearfix">
                    <li>
                      <span className="font-weight-bold mr-1">
                        Property ID:
                      </span>
                      <span className="det">V254680</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">
                        Property Type:
                      </span>
                      <span className="det">House</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">
                        Property status:
                      </span>
                      <span className="det">For Sale</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">
                        Property Price:
                      </span>
                      <span className="det">$230,000</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">Rooms:</span>
                      <span className="det">6</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">Bedrooms:</span>
                      <span className="det">7</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">Bath:</span>
                      <span className="det">4</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">Garages:</span>
                      <span className="det">2</span>
                    </li>
                    <li>
                      <span className="font-weight-bold mr-1">Year Built:</span>
                      <span className="det">10/6/2020</span>
                    </li>
                  </ul>

                  <h5 className="mt-5">Amenities</h5>

                  <ul className="homes-list clearfix">
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Air Cond</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Balcony</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Internet</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Dishwasher</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Bedding</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Cable TV</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Parking</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Pool</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                      <span>Fridge</span>
                    </li>
                  </ul>
                </div>

                <div className="floor-plan property wprt-image-video w50 pro">
                  <h5>Floor Plans</h5>
                  <img alt="image" src="/images/floor-plan-1.png" />
                </div>

                <div className="floor-plan property wprt-image-video w50 pro">
                  <h5>What&lsquo;s Nearby</h5>
                  <div className="property-nearby">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="nearby-info mb-4">
                          <span className="nearby-title mb-3 d-block text-info">
                            <i className="fas fa-graduation-cap mr-2"></i>
                            <b className="title">Education</b>
                          </span>
                          <div className="nearby-list">
                            <ul className="property-list list-unstyled mb-0">
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">
                                  Education Mandarin
                                </h6>
                                <span>(15.61 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">Marry&apos;s Education</h6>
                                <span>(15.23 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">The Kaplan</h6>
                                <span>(15.16 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="nearby-info mb-4">
                          <span className="nearby-title mb-3 d-block text-success">
                            <i className="fas fa-user-md mr-2"></i>
                            <b className="title">Health &amp; Medical</b>
                          </span>
                          <div className="nearby-list">
                            <ul className="property-list list-unstyled mb-0">
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">Natural Market</h6>
                                <span>(13.20 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">Food For Health</h6>
                                <span>(13.22 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">
                                  A Matter of Health
                                </h6>
                                <span>(13.34 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="nearby-info">
                          <span className="nearby-title mb-3 d-block text-danger">
                            <i className="fas fa-car mr-2"></i>
                            <b className="title">Transportation</b>
                          </span>
                          <div className="nearby-list">
                            <ul className="property-list list-unstyled mb-0">
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">
                                  Airport Transportation
                                </h6>
                                <span>(11.36 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">
                                  NYC Executive Limo
                                </h6>
                                <span>(11.87 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                              <li className="d-flex">
                                <h6 className="mb-3 mr-2">Empire Limousine</h6>
                                <span>(11.52 miles)</span>
                                <ul className="list-unstyled list-inline ml-auto">
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="fas fa-star-half fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                  <li className="list-inline-item m-0 text-warning">
                                    <i className="far fa-star fa-xs"></i>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="property wprt-image-video w50 pro">
                  <h5>Property Video</h5>
                  <img
                    alt="image"
                    src="/images/home-slider-4.jpg"
                    width="100%"
                  />
                  <a
                    className="icon-wrap popup-video popup-youtube"
                    href="https://www.youtube.com/watch?v=14semTlwyUY"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <div className="iq-waves">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>

                <div className="property-location map">
                  <h5>Location</h5>
                  <div style={{ width: "100%" }}>
                    <iframe
                      width="100%"
                      height="300"
                      scrolling="no"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/">gps systems</a>
                    </iframe>
                  </div>
                </div>

                <section className="reviews comments w50 pro">
                  <h3 className="mb-5">3 Reviews</h3>
                  <div className="row mb-5">
                    <ul className="col-12 commented pl-0">
                      <li className="comm-inf">
                        <div className="col-md-2">
                          <img
                            src="/images/ts-5.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-10 comments-info">
                          <div className="conra">
                            <h5 className="mb-2">Mary Smith</h5>
                            <div className="rating-box">
                              <div className="detail-list-rating mr-0">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-4">May 30 2020</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras aliquam, quam congue dictum luctus, lacus
                            magna congue ante, in finibus dui sapien eu dolor.
                            Integer tincidunt suscipit erat, nec laoreet ipsum
                            vestibulum sed.
                          </p>
                          <div className="rest">
                            <img
                              src="/images/s-1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="col-12 commented pl-0">
                      <li className="comm-inf">
                        <div className="col-md-2">
                          <img
                            src="/images/ts-4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-10 comments-info">
                          <div className="conra">
                            <h5 className="mb-2">Abraham Tyron</h5>
                            <div className="rating-box">
                              <div className="detail-list-rating mr-0">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-4">june 1 2020</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras aliquam, quam congue dictum luctus, lacus
                            magna congue ante, in finibus dui sapien eu dolor.
                            Integer tincidunt suscipit erat, nec laoreet ipsum
                            vestibulum sed.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="row mt-5">
                    <ul className="col-12 commented mb-0 pl-0">
                      <li className="comm-inf">
                        <div className="col-md-2">
                          <img
                            src="/images/ts-3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-md-10 comments-info">
                          <div className="conra">
                            <h5 className="mb-2">Lisa Williams</h5>
                            <div className="rating-box">
                              <div className="detail-list-rating mr-0">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-4">jul 12 2020</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras aliquam, quam congue dictum luctus, lacus
                            magna congue ante, in finibus dui sapien eu dolor.
                            Integer tincidunt suscipit erat, nec laoreet ipsum
                            vestibulum sed.
                          </p>
                          <div className="resti">
                            <div className="rest">
                              <img
                                src="/images/s-2.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="rest">
                              <img
                                src="/images/s-3.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="single reviews leve-comments details">
                  <div id="add-review" className="add-review-box">
                    <h3 className="listing-desc-headline margin-bottom-20 mb-4">
                      Add Review
                    </h3>
                    <span className="leave-rating-title">
                      Your rating for this listing
                    </span>

                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="clearfix"></div>
                        <div className="leave-rating margin-bottom-30">
                          <input
                            type="radio"
                            name="rating"
                            id="rating-1"
                            value="1"
                          />
                          <label
                            htmlFor="rating-1"
                            className="fa fa-star"
                          ></label>
                          <input
                            type="radio"
                            name="rating"
                            id="rating-2"
                            value="2"
                          />
                          <label
                            htmlFor="rating-2"
                            className="fa fa-star"
                          ></label>
                          <input
                            type="radio"
                            name="rating"
                            id="rating-3"
                            value="3"
                          />
                          <label
                            htmlFor="rating-3"
                            className="fa fa-star"
                          ></label>
                          <input
                            type="radio"
                            name="rating"
                            id="rating-4"
                            value="4"
                          />
                          <label
                            htmlFor="rating-4"
                            className="fa fa-star"
                          ></label>
                          <input
                            type="radio"
                            name="rating"
                            id="rating-5"
                            value="5"
                          />
                          <label
                            htmlFor="rating-5"
                            className="fa fa-star"
                          ></label>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="col-md-6">
                        <div className="add-review-photos margin-bottom-30">
                          <div className="photoUpload">
                            <span>
                              <i className="sl sl-icon-arrow-up-circle"></i>{" "}
                              Upload Photos
                            </span>
                            <input type="file" className="upload" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 data">
                        <form action="#">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 form-group">
                            <textarea
                              className="form-control"
                              id="exampleTextarea"
                              rows={8}
                              placeholder="Review"
                              required
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg mt-2"
                          >
                            Submit Review
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 car">
            <div className="widget-boxed">
              <div className="widget-boxed-header">
                <h4>Agent Information</h4>
              </div>
              <div className="widget-boxed-body">
                <div className="sidebar-widget author-widget2">
                  <div className="author-box clearfix">
                    <img
                      src="/images/ts-1.jpg"
                      alt="author-image"
                      className="author__img"
                    />
                    <div className="author-name">
                      <h4 className="author__title">Lisa Clark</h4>
                      <p className="author__meta">Agent of Property</p>
                    </div>
                  </div>
                  <ul className="author__contact">
                    <li>
                      <span className="la la-map-marker">
                        <i className="fa fa-map-marker"></i>
                      </span>
                      302 Av Park, New York
                    </li>
                    <li>
                      <span className="la la-phone">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </span>
                      <a href="#">(234) 0200 17813</a>
                    </li>
                    <li>
                      <span className="la la-envelope-o">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      <a href="#">lisa@gmail.com</a>
                    </li>
                  </ul>
                  <div className="agent-contact-form-sidebar">
                    <h4>Request Inquiry</h4>
                    <form
                      name="contact_form"
                      method="post"
                      action="functions.php"
                    >
                      <input
                        type="text"
                        id="fname"
                        name="full_name"
                        placeholder="Full Name"
                        required
                      />
                      <input
                        type="number"
                        id="pnumber"
                        name="phone_number"
                        placeholder="Phone Number"
                        required
                      />
                      <input
                        type="email"
                        id="emailid"
                        name="email_address"
                        placeholder="Email Address"
                        required
                      />
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                      <input
                        type="submit"
                        name="sendmessage"
                        className="multiple-send-message"
                        value="Submit Request"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-boxed mt-5">
              <div className="widget-boxed-header">
                <h4>Recent Properties</h4>
              </div>
              <div className="widget-boxed-body">
                <div className="recent-post">
                  <div className="recent-main">
                    <div className="recent-img">
                      <a href="#">
                        <img src="/images/fp-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="info-img">
                      <a href="#">
                        <h6>Family Home</h6>
                      </a>
                      <p>$230,000</p>
                    </div>
                  </div>
                  <div className="recent-main my-4">
                    <div className="recent-img">
                      <a href="#">
                        <img src="/images/fp-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="info-img">
                      <a href="#">
                        <h6>Family Home</h6>
                      </a>
                      <p>$230,000</p>
                    </div>
                  </div>
                  <div className="recent-main">
                    <div className="recent-img">
                      <a href="#">
                        <img src="/images/fp-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="info-img">
                      <a href="#">
                        <h6>Family Home</h6>
                      </a>
                      <p>$230,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-boxed mt-5">
              <div className="widget-boxed-header mb-5">
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
            <div className="widget-boxed popular mt-5">
              <div className="widget-boxed-header">
                <h4>Specials of the day</h4>
              </div>
              <div className="widget-boxed-body">
                <div className="banner">
                  <img src="/images/specialDay.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="similar-property featured portfolio p-0 bg-white-inner">
          <div className="container bx-brd-box ">
            <h5>Similar Properties</h5>
            <div className="row portfolio-items">
              <div className="item col-lg-4 col-md-6 col-xs-12 landscapes">
                <div className="project-single">
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
                  <div className="homes-content">
                    <h3>
                      <a href="#">Real House Luxury Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
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
              <div className="item col-lg-4 col-md-6 col-xs-12 landscapes">
                <div className="project-single">
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
                  <div className="homes-content">
                    <h3>
                      <a href="#">Real House Luxury Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
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
              <div className="item col-lg-4 col-md-6 col-xs-12 landscapes">
                <div className="project-single">
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
                  <div className="homes-content">
                    <h3>
                      <a href="#">Real House Luxury Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
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
        </section>
      </div>
    </section>
  );
};

export default PropertyDetail;
