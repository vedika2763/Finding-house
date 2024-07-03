import React from "react";
import { Clock, Mail, MapPin, Phone } from "react-feather";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div id="ContactUs">
      <section className="headings">
        <div className="text-heading text-center">
          <div className="container bx-brd-box ">
            <h1>Contact Us</h1>
            <h2>
              <a href="/">Home </a> / Contact Us
            </h2>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="container bx-brd-box ">
          <div className="property-location mb-5">
            <h3>Our Location</h3>
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
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h3 className="mb-4">Contact Us</h3>
              <form
                id="contactform"
                className="contact-form"
                name="contactform"
                method="post"
                noValidate
              >
                <div className="form-group">
                  <input
                    type="text"
                    required
                    className="form-control input-custom input-full"
                    name="name"
                    placeholder="First Name"
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    required
                    className="form-control input-custom input-full"
                    name="lastname"
                    placeholder="Last Name"
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-custom input-full"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control textarea-custom input-full"
                    id="ccomment"
                    name="message"
                    required
                    rows={8}
                    placeholder="Message"
                    aria-required="true"
                  ></textarea>
                </div>
                <button type="submit" id="submit-contact" className="btn">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4 col-md-12 bgc">
              <div className="call-info">
                <h3>Contact Details</h3>
                <p className="mb-5">
                  Please find below contact details and contact us today!
                </p>
                <ul>
                  <li>
                    <div className="info">
                      <MapPin />
                      <p className="in-p">95 South Park Ave, USA</p>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <Phone />
                      <p className="in-p">+456 875 369 208</p>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <Mail />
                      <p className="in-p ti">support@findhouses.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="info cll">
                      <Clock />
                      <p className="in-p ti">8:00 a.m - 9:00 p.m</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
