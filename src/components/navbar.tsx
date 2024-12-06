"use client";
import React, { useEffect, useState } from "react";

// Extend the global Window interface to include Google Translate types
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number; // Updated layout type to match Google Translate API
            },
            containerId: string
          ): void;
          InlineLayout: {
            SIMPLE: number; // Simple Inline Layout
            DROPDOWN: number; // Dropdown Layout
          };
        };
      };
    };
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Dynamically load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    addGoogleTranslateScript();
  }, [isOpen]);
  return (
    <>
      <header>
        <div className="fixed-nav ">
          <p className="m-0">
            VISIT OUR BRAND STORE ON{" "}
            <a
              className="button"
              href="https://www.amazon.ca/stores/page/CF5FC34A-B5FC-4D8A-B46F-A10ACF65412D?maas=maas_adg_234EAA06C0C13625467395E27B220D37_afap_abs&ref_=aa_maas&tag=maas"
            >
              AMAZON.CA
            </a>
          </p>
        </div>

        <nav className="pt-2 px-md-5 second-nav">
          <div className="d-flex px-3 justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <a
                href="https://buddhabrands.ca/"
                className="site-header__logo"
                aria-label="Logo"
              >
                <img src="./images/title.svg" style={{ width: "150px" }} />
              </a>
            </div>

            <ul
              className="d-none  d-xl-flex flex-wrap justify-content-center align-items-center gap-4 list-unstyled fs-4 "
              id="nav"
              style={{ color: "rgb(0, 48, 110); padding-top: 20px;" }}
            >
              <li className="nav-item nav-item-active">
                <a className="nav-link " aria-current="page" href="#">
                  <p className="m-0">Products</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <p className="m-0">Learn</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://buddhabrands.ca/pages/storelocator"
                >
                  <p className="m-0 text-center">Where to buy</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://buddhabrands.ca/pages/get-in-touch"
                >
                  <p className="m-0">Contact</p>
                </a>
              </li>
            </ul>
            <ul className="nav justify-content-center align-items-center gap-4">
              <li className="nav-item d-none d-xl-block">
                <div id="google_translate_element"></div>
              </li>
              <li className="nav-item">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                  id="user"
                  className="icon icon-user"
                  width="25"
                  height="25"
                >
                  <path
                    d="M2 24.6405C2 19.9211 5.94286 16.0952 14 16.0952C22.0571 16.0952 26 19.9211 26 24.6405C26 25.3913 25.4522 26 24.7765 26H3.22353C2.54779 26 2 25.3913 2 24.6405Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  ></path>
                  <path
                    d="M18.5 6.5C18.5 8.98528 16.4853 11 14 11C11.5147 11 9.5 8.98528 9.5 6.5C9.5 4.01472 11.5147 2 14 2C16.4853 2 18.5 4.01472 18.5 6.5Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  ></path>
                </svg>
              </li>
              <li className="nav-item">
                <svg
                  viewBox=" 0 0 28 28"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                  id="cart-shop"
                  className="icon cart-shop"
                  width="25"
                  height="25"
                >
                  <path
                    d="M18.5 9.5V5.75C18.5 3.26472 16.4853 1.25 14 1.25C11.5147 1.25 9.5 3.26472 9.5 5.75V9.5M4.90909 26.75H23.0909C24.6976 26.75 26 25.4718 26 23.895L24.1364 8.74996C24.1364 7.17318 22.8339 5.89494 21.2273 5.89494H6.40909C4.80244 5.89494 3.5 7.17318 3.5 8.74996L2 23.895C2 25.4718 3.30244 26.75 4.90909 26.75Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="nav-item  d-xl-none">
                {" "}
                <div className="hamburger-menu">
                  {/* Hamburger Icon */}
                  <button
                    className={`hamburger ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>

                  {/* Menu Items */}
                  <nav className={`menu ${isOpen ? "open" : ""}`}>
                    <ul>
                      <li>
                        <a href="">Products</a>
                      </li>
                      <li>
                        <a href="">Learn</a>
                      </li>
                      <li>
                        <a href="">Where to buy</a>
                      </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                      <div id="google_translate_element"></div>
                    </ul>
                  </nav>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
