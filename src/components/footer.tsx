import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Ocean-2">
        <svg className="Wave-2" viewBox="0 0 12960 1120">
          <path d="M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z">
            <animate
              dur="5s"
              repeatCount="indefinite"
              attributeName="d"
              values="
                M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z;
                M9720,0C8100,0,8100,319,6480,319S4860,0,3240,0,1620,320,0,320v800H12960V320C11340,320,11340,0,9720,0Z;
                M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z
            "
            />
          </path>
        </svg>
      </div>

      <div style={{ backgroundColor: "#74d1ea" }}>
        <div className="container2 ">
          <div className="container2-child ">
            <div className="parent">
              <img
                className="image3"
                src="https://buddhabrands.ca/cdn/shop/files/Lines_600x.png?v=1676471949"
              />
              <img
                className="image4"
                src="https://buddhabrands.ca/cdn/shop/files/logo_rounded_340x.webp?v=1682693972"
              />
            </div>
          </div>
          <div className="container2-child two">
            <div>
              <p
                style={{
                  color: "#00306E",
                  fontSize: "50px",
                }}
              >
                POWERED BY <span style={{ color: "white" }}>PLANTS</span>.
              </p>
              <p
                style={{
                  color: "#00306E",
                  fontSize: "50px",
                }}
              >
                FUELED BY <span style={{ color: "white" }}>PURPOSE</span>.
              </p>
            </div>
            <h3 className="footer-heading2">
              Inspiration Delivered to Your Inbox!
            </h3>
            <h6 className="footer-heading3">
              Join the Buddha Brands™ Community and get notified of exclusive
              promotions and discounts, new products, announcements and more.
            </h6>
            <div
              className="subscribe-container w-100"
              style={{
                textAlign: "center",
                fontFamily: "Concert One, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              <input
                id="input"
                type="email"
                placeholder="Email Address"
                className="w-100"
              />
              <button className="button subscribe-btn">Subscribe</button>
            </div>
            <br />
            <h6 className="footer-p">
              By subscribing to our newsletter you understand and accept that we
              may share your information with vendors or other third parties who
              perform services on our behalf. The personal information collected
              may be stored, processed, and transferred to a country or region
              outside of Quebec. Please read our privacy policy for more
              details.
            </h6>
          </div>
        </div>
      </div>

      <footer className="last-footer">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
          <div className="shop-footer text-center hidden">
            <h3 className="h3-footer footer-h3 w-100 text-center ">Shop</h3>
            <div className="footer-link w-100 text-center text-md-start ">
              <a href="#" className="link footer-link-t w-100">
                Thirsty Buddha <sup id="sup-style">R</sup> Coconut Water
              </a>
              <a href="#" className="link footer-link-t w-100">
                Thirsty Buddha <sup id="sup-style">R</sup> Sparkling Coconut
                Water
              </a>
              <a href="#" className="link footer-link-t w-100">
                Thirsty Buddha <sup id="sup-style">R</sup> Soda
              </a>
              <a href="#" className="link footer-link-t w-100">
                Thirsty Buddha <sup id="sup-style">R</sup> Bars
              </a>
              <a href="#" className="link footer-link-t w-100">
                Shop All
              </a>
            </div>
          </div>
          <div className="support hidden">
            <h3 className="h3-footer footer-h3">Support</h3>
            <div className="footer-link text-center text-md-start">
              <a href="#" className="link footer-link-t">
                Contact
              </a>
              <a href="#" className="link footer-link-t">
                Wholesale
              </a>
              <a href="#" className="link footer-link-t">
                FAQs
              </a>
              <a href="#" className="link footer-link-t">
                Shipping & Returns
              </a>
              <a href="#" className="link footer-link-t">
                Refund Policy
              </a>
            </div>
          </div>
          <div className="learn hidden">
            <h3 className="h3-footer footer-h3">Learn</h3>
            <div className="footer-link text-center text-md-start">
              <a href="#" className="link footer-link-t">
                Our Story
              </a>
              <a href="#" className="link footer-link-t">
                Sustainability
              </a>
              <a href="#" className="link footer-link-t">
                Recipes
              </a>
            </div>
          </div>

          <div className="social-footer text-center text-md-start">
            <h3 className="h3-footer footer-h3">Join,share & Inspire</h3>

            <div className="social-links">
              <a href="#" className="link footer-link-t">
                <i className="fab fa-instagram insta"></i>
              </a>
              <a href="#" className="link footer-link-t">
                <i className="fab fa-facebook-f face"></i>
              </a>
              <a href="#" className="link footer-link-t">
                <i className="fab fa-twitter twitt"></i>
              </a>
            </div>
            <div className="footer-icons">
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-instagram"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="currentColor"
                    d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  width="13"
                  height="25"
                  viewBox="0 0 13 25"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-facebook"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.43881 25V13.5972H12.2701L12.8449 9.15195H8.43881V6.31434C8.43881 5.02775 8.79512 4.15095 10.6448 4.15095L13 4.14999V0.174037C12.5927 0.121182 11.1946 0 9.56729 0C6.16927 0 3.84292 2.07121 3.84292 5.87409V9.15195H0V13.5972H3.84292V25H8.43881Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-twitter"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 2.24931C23.1075 2.63077 22.1565 2.88362 21.165 3.00638C22.185 2.413 22.9635 1.48054 23.3295 0.356615C22.3785 0.909077 21.3285 1.29931 20.2095 1.51708C19.3065 0.580231 18.0195 0 16.6155 0C13.8915 0 11.6985 2.15431 11.6985 4.79531C11.6985 5.17531 11.7315 5.54069 11.8125 5.88854C7.722 5.69415 4.1025 3.78392 1.671 0.874C1.2465 1.59162 0.9975 2.413 0.9975 3.29723C0.9975 4.95754 1.875 6.42931 3.183 7.28138C2.3925 7.26677 1.617 7.04315 0.96 6.69092V6.74354C0.96 9.07323 2.6655 11.0083 4.902 11.4541C4.5015 11.5608 4.065 11.6119 3.612 11.6119C3.297 11.6119 2.979 11.5944 2.6805 11.5301C3.318 13.4286 5.127 14.8244 7.278 14.8697C5.604 16.1456 3.4785 16.9144 1.1775 16.9144C0.774 16.9144 0.387 16.8968 0 16.8486C2.1795 18.2181 4.7625 19 7.548 19C16.602 19 21.552 11.6923 21.552 5.358C21.552 5.14608 21.5445 4.94146 21.534 4.73831C22.5105 4.06308 23.331 3.21977 24 2.24931Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="h3-footer footer-h3">
              Got a question?{" "}
              <a href="#">
                {" "}
                <span>
                  {" "}
                  <u className="u-email">Email US!</u>{" "}
                </span>
              </a>
            </h3>
            <h3 className="h3-footer footer-h3">Temple Lifestyle Inc.</h3>
            <h4 className="h4-footer-address fs-6 address">
              Address: 9600 RUE Meilleur Suite 932
            </h4>
            <h4 className="h4-footer-address address">
              Montreal,Quebec H2N 2E3
            </h4>
            <div className="footer-email-address"></div>
          </div>
          <div className="buy-footer d-flex justify-content-center d-md-block">
            <button className="btn footer-btn button">WHERE TO BUY</button>
          </div>
        </div>
        <div className="wavy"></div>
        <div>
          <img
            className="responsive-image"
            src="https://cdn.shopify.com/s/files/1/0530/5532/4348/files/Stroke.png?v=1676472970"
            alt=""
          />
        </div>
        <div className="footer-end">
          <div className="footer-copy-right  text-center col-6">
            &copy 2024, Temple Lifestyle Inc.
          </div>
          <div className="footer-end-link col-6">
            <a href="#" className="link footer-link-t">
              privacy Policy
            </a>
            <a href="#" className="link footer-link-t">
              Terms & Conditions
            </a>
            <a href="#" className="link footer-link-t">
              Data Requests
            </a>
            <a href="#" className="link footer-link-t">
              Do Not Sell
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
