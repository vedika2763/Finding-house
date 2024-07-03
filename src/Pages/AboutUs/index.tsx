import React from "react";
import Link from "next/link";
import { Award, Home, Menu, Play, Star, Users } from "react-feather";
import Image from "next/image";
import Counter from "src/component/Counter/Counter";
import TesiSlider from "src/component/testiSlider/TestiSlider";
import ClientSlider from "../ClientSlider";

type Props = {};

const AboutUs = (props: Props) => {
  return (
      <div id="aboutUs">
        <section className="headings">
          <div className="text-heading text-center">
            <div className="container bx-brd-box ">
              <h1>About Our Company</h1>
              <h2>
                <Link href="/">Home </Link> / About Us
              </h2>
            </div>
          </div>
        </section>
        <section className="about-us fh">
          <div className="container bx-brd-box ">
            <div className="row">
              <div className="col-lg-6 col-md-12 who-1">
                <div>
                  <h2 className="text-left mb-4">
                    About <span>Find Houses</span>
                  </h2>
                </div>
                <div className="pftext">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum odio id voluptatibus incidunt cum? Atque quasi eum
                    debitis optio ab. Esse itaque officiis tempora possimus odio
                    rerum aperiam ratione, sunt. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit sunt.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum odio id voluptatibus incidunt cum? Atque quasi eum
                    debitis optio ab. Esse itaque officiis tempora possimus odio
                    rerum aperiam ratione, sunt. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit sunt.
                  </p>
                </div>
                <div className="box bg-2">
                  <Link
                    href="#"
                    className="text-center button button--moema button--text-thick button--text-upper button--size-s"
                  >
                    read More
                  </Link>
                  <Image
                    width={226}
                    height={62}
                    src="/images/signature.png"
                    className="ml-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="wprt-image-video w50">
                  <Image
                    width={1000}
                    height={750}
                    alt="image"
                    src="/images/bg-video.jpg"
                  />
                  <Link
                    className="icon-wrap popup-video popup-youtube"
                    href="#"
                  >
                    <Play />
                  </Link>
                  <div className="iq-waves">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-it-works bg-white-2">
          <div className="container bx-brd-box ">
            <div className="sec-title">
              <h2>
                <span>Why </span>Choose Us
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="row service-1">
              <article
                className="col-lg-4 col-md-6 col-xs-12 serv"
                data-aos="fade-up"
              >
                <div className="serv-flex">
                  <div className="art-1 img-13">
                    <Image
                      width={155}
                      height={150}
                      src="/images/icon-4.svg"
                      alt=""
                    />
                    <h3>Wide Renge Of Properties</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici
                      consectetur debits adipisicing lacus consectetur Business
                      Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 col-xs-12 serv"
                data-aos="fade-up"
              >
                <div className="serv-flex">
                  <div className="art-1 img-14">
                    <Image
                      width={155}
                      height={150}
                      src="/images/icon-5.svg"
                      alt=""
                    />
                    <h3>Trusted by thousands</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici
                      consectetur debits adipisicing lacus consectetur Business
                      Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 col-xs-12 serv mb-0 pt"
                data-aos="fade-up"
              >
                <div className="serv-flex arrow">
                  <div className="art-1 img-15">
                    <Image
                      width={155}
                      height={150}
                      src="/images/icon-6.svg"
                      alt=""
                    />
                    <h3>Financing made easy</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici
                      consectetur debits adipisicing lacus consectetur Business
                      Directory.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="counterup">
          <div className="container bx-brd-box ">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="countr">
                  <Home />
                  <div className="count-me">
                    <p className="counter text-left">
                      <Counter finalNumber={300} />
                    </p>
                    <h3>Sold Houses</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="countr">
                  <Menu />
                  <div className="count-me">
                    <p className="counter text-left">
                      <Counter finalNumber={400} />
                    </p>
                    <h3>Daily Listings</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="countr mb-0">
                  <Users />
                  <div className="count-me">
                    <p className="counter text-left">
                      <Counter finalNumber={250} />
                    </p>
                    <h3>Expert Agents</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="countr mb-0 last">
                  <Award />
                  <div className="count-me">
                    <p className="counter text-left">
                      <Counter finalNumber={200} />
                    </p>
                    <h3>Won Awars</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container bx-brd-box ">
            <div className="sec-title">
              <h2>
                <span>Our </span>Team
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="row team-all">
              <div className="col-lg-3 col-md-6 team-pro">
                <div className="team-wrap">
                  <div className="team-img">
                    <Image
                      width={260}
                      height={270}
                      src="/images/t-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Carls Jhons</h3>
                      <p>Financial Advisor</p>
                      <div className="team-socials">
                        <ul>
                          <li>
                            <Link href="#" className="facebook">
                              <Image
                                src="/images/facebook.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="twitter">
                              <Image
                                src="/images/twitter.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="instagran">
                              <Image
                                src="/images/instagram.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <span>
                        <Link href="#">View Profile</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 team-pro">
                <div className="team-wrap">
                  <div className="team-img">
                    <Image
                      width={260}
                      height={270}
                      src="/images/t-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Carls Jhons</h3>
                      <p>Financial Advisor</p>
                      <div className="team-socials">
                        <ul>
                          <li>
                            <Link href="#" className="facebook">
                              <Image
                                src="/images/facebook.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="twitter">
                              <Image
                                src="/images/twitter.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="instagran">
                              <Image
                                src="/images/instagram.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <span>
                        <Link href="#">View Profile</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 team-pro">
                <div className="team-wrap">
                  <div className="team-img">
                    <Image
                      width={260}
                      height={270}
                      src="/images/t-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Carls Jhons</h3>
                      <p>Financial Advisor</p>
                      <div className="team-socials">
                        <ul>
                          <li>
                            <Link href="#" className="facebook">
                              <Image
                                src="/images/facebook.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="twitter">
                              <Image
                                src="/images/twitter.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="instagran">
                              <Image
                                src="/images/instagram.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <span>
                        <Link href="#">View Profile</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 team-pro">
                <div className="team-wrap">
                  <div className="team-img">
                    <Image
                      width={260}
                      height={270}
                      src="/images/t-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Carls Jhons</h3>
                      <p>Financial Advisor</p>
                      <div className="team-socials">
                        <ul>
                          <li>
                            <Link href="#" className="facebook">
                              <Image
                                src="/images/facebook.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="twitter">
                              <Image
                                src="/images/twitter.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="#" className="instagran">
                              <Image
                                src="/images/instagram.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <span>
                        <Link href="#">View Profile</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials home18 bg-white">
          <div className="container bx-brd-box ">
            <div className="sec-title">
              <h2>
                <span>Clients </span>Testimonials
              </h2>
              <p>We collect reviews from our customers.</p>
            </div>
            <TesiSlider>
              <div className="test-1 pb-0 pt-0">
                <Image width={252} height={270} src="/images/ts-1.jpg" alt="" />
                <h3 className="mt-3 mb-0">Lisa Smith</h3>
                <h6 className="mt-1">New York</h6>
                <ul className="starts text-center mb-2">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
                  venenatis. Vitae sit felis donec, suscipit tortor et sapien
                  donec.
                </p>
              </div>

              <div className="test-1 pb-0 pt-0">
                <Image width={252} height={270} src="/images/ts-1.jpg" alt="" />
                <h3 className="mt-3 mb-0">Lisa Smith</h3>
                <h6 className="mt-1">New York</h6>
                <ul className="starts text-center mb-2">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
                  venenatis. Vitae sit felis donec, suscipit tortor et sapien
                  donec.
                </p>
              </div>

              <div className="test-1 pb-0 pt-0">
                <Image width={252} height={270} src="/images/ts-1.jpg" alt="" />
                <h3 className="mt-3 mb-0">Lisa Smith</h3>
                <h6 className="mt-1">New York</h6>
                <ul className="starts text-center mb-2">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
                  venenatis. Vitae sit felis donec, suscipit tortor et sapien
                  donec.
                </p>
              </div>

              <div className="test-1 pb-0 pt-0">
                <Image width={252} height={270} src="/images/ts-1.jpg" alt="" />
                <h3 className="mt-3 mb-0">Lisa Smith</h3>
                <h6 className="mt-1">New York</h6>
                <ul className="starts text-center mb-2">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
                  venenatis. Vitae sit felis donec, suscipit tortor et sapien
                  donec.
                </p>
              </div>

              <div className="test-1 pb-0 pt-0">
                <Image width={252} height={270} src="/images/ts-1.jpg" alt="" />
                <h3 className="mt-3 mb-0">Lisa Smith</h3>
                <h6 className="mt-1">New York</h6>
                <ul className="starts text-center mb-2">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
                  venenatis. Vitae sit felis donec, suscipit tortor et sapien
                  donec.
                </p>
              </div>

              <div className="test-1 pb-0 pt-0">
                <Image width={252} height={270} src="/images/ts-1.jpg" alt="" />
                <h3 className="mt-3 mb-0">Lisa Smith</h3>
                <h6 className="mt-1">New York</h6>
                <ul className="starts text-center mb-2">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
                  venenatis. Vitae sit felis donec, suscipit tortor et sapien
                  donec.
                </p>
              </div>
            </TesiSlider>
          </div>
        </section>
        <div className="partners bg-white-2">
          <div className="container bx-brd-box ">
            <div className="sec-title">
              <h2>
                <span>Our </span>Partners
              </h2>
              <p>The Companies That Represent Us.</p>
            </div>
            <ClientSlider>
              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />

              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />

              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />

              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />

              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />

              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />

              <Image
                width={150}
                height={100}
                src="/images/customer1.jpg"
                alt=""
              />
            </ClientSlider>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
