import React from "react";

const Banner = () => {
  return (
    <div className="position-relative">
      <div
        className="w-100 position-absolute"
        style={{ background: "#74d1ea", paddingTop: "3%" }}
      >
        <p className="m-0 mx-auto banner-breadcumb">
          <a className="link footer-link-t" href="https://buddhabrands.ca/">
            Home
          </a>
          <span style={{ color: "rgba(0, 48, 110)" }}> &gt; </span>
          <a className="link footer-link-t" href="">
            Shop
          </a>
        </p>

        <div className="main-banner d-flex flex-column flex-md-row mx-auto  ">
          <div className="banner-start-texts ">
            <h1 className="w-100">
              <p className="" style={{ fontSize: "50px", color: "#002d72" }}>
                Shop all snacks and beverages.
              </p>
            </h1>
            <span
              style={{ color: "rgba(0, 48, 110)" }}
              className="fs-4 fw-semibold w-100"
            >
              Nutritious, delicious plant-based snacks and beverages.
            </span>
          </div>
          <div className="banner-right-side">
            <div className="w-100 position-relative parent-banner">
              <img
                className="image2"
                src="https://buddhabrands.ca/cdn/shop/files/collections_hero_690x.png?v=1677961957"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-background"></div>

      <div className="Ocean ">
        <svg className="Wave" viewBox="0 0 12960 1120">
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
    </div>
  );
};

export default Banner;
