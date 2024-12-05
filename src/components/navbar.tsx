import React from "react";

const Navbar = () => {
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

        <nav className="pt-2" style={{ background: "#74d1ea !important;" }}>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
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
              className="d-flex flex-wrap justify-content-center align-items-center gap-4 list-unstyled fs-4"
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
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <div id="google_translate_element"></div>

                {/* <script type="text/javascript">
                            function googleTranslateElementInit() {
                            new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: "en,bn,hi,fr", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
                            }
                        </script>
                        
                        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> */}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://buddhabrands.ca/account/login"
                >
                  <img id="profile" src="images/person.png" alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://buddhabrands.ca/cart">
                  <img id="profile" src="images/shopping_bag.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
