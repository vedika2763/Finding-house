import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Twitter } from "react-feather";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="first-footer">
      <div className="top-footer bg-white">
        <div className="container bx-brd-box ">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="netabout">
                <Link href="/" className="logo">
                  <Image
                    width={180}
                    height={40}
                    src="/images/logo-black.svg"
                    alt="netcom"
                  />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  incidunt architecto soluta laboriosam, perspiciatis,
                  aspernatur officiis esse.
                </p>
              </div>
              <div className="contactus">
                <ul>
                  <li>
                    <div className="info">
                      <MapPin color="#333" width={16} height={16} />
                      <p className="in-p">95 South Park Avenue, USA</p>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <Phone color="#333" width={16} height={16} />
                      <p className="in-p">+456 875 369 208</p>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <Mail color="#333" width={16} height={16} />
                      <p className="in-p ti">support@findhouses.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="navigation">
                <h3>Navigation</h3>
                <div className="nav-footer">
                  <ul>
                    <li>
                      <Link href="/">Home One</Link>
                    </li>
                    <li>
                      <Link href="#">Properties Right</Link>
                    </li>
                    <li>
                      <Link href="#">Properties List</Link>
                    </li>
                    <li>
                      <Link href="#">Property Details</Link>
                    </li>
                    <li className="no-mgb">
                      <Link href="#">Agents Listing</Link>
                    </li>
                  </ul>
                  <ul className="nav-right">
                    <li>
                      <Link href="#">Agents Details</Link>
                    </li>
                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Blog Default</Link>
                    </li>
                    <li>
                      <Link href="#">Blog Details</Link>
                    </li>
                    <li className="no-mgb">
                      <Link href="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget">
                <h3>Twitter Feeds</h3>
                <div className="twitter-widget contuct">
                  <div className="twitter-area">
                    <div className="single-item">
                      <div className="icon-holder">
                        <Twitter color="#333" width={15} height={15} />
                      </div>
                      <div className="text">
                        <h5>
                          <Link href="#">@findhouses</Link> all share them with
                          me baby said inspet.
                        </h5>
                        <h4>about 5 days ago</h4>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="icon-holder">
                        <Twitter color="#333" width={15} height={15} />
                      </div>
                      <div className="text">
                        <h5>
                          <Link href="#">@findhouses</Link> all share them with
                          me baby said inspet.
                        </h5>
                        <h4>about 5 days ago</h4>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="icon-holder">
                        <Twitter color="#333" width={15} height={15} />
                      </div>
                      <div className="text">
                        <h5>
                          <Link href="#">@findhouses</Link> all share them with
                          me baby said inspet.
                        </h5>
                        <h4>about 5 days ago</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="newsletters">
                <h3>Newsletters</h3>
                <p>
                  Sign Up for Our Newsletter to get Latest Updates and Offers.
                  Subscribe to receive news in your inbox.
                </p>
                <form
                  className="bloq-email mailchimp form-inline"
                  action=""
                  method="post"
                >
                  <label htmlFor="subscribeEmail" className="error"></label>
                  <div className="email">
                    <input
                      type="email"
                      id="subscribeEmail"
                      name="EMAIL"
                      placeholder="Enter Your Email"
                    />
                    <input type="submit" value="Subscribe" />
                    <p className="subscription-success"></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-footer bg-white-3">
        <div className="container bx-brd-box ">
          <p>2021 © Copyright - All Rights Reserved.</p>
          <ul className="netsocials">
            <li>
              <Link href="#" className="facebook">
                <Image
                  src="/images/facebook.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="twitter">
                <Image
                  src="/images/twitter.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="instagram">
                <Image
                  src="/images/instagram.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="youtube">
                <Image
                  src="/images/youtube.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
