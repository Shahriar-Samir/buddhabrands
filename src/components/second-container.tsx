"use client";

const SecondContainer = () => {
  const handleViewAll = () => {
    window.location.href =
      "https://buddhabrands.ca/collections/thirsty-buddha-coconut-water";
  };
  return (
    <>
      <div
        className="scroll-container"
        style={{
          backgroundColor: "#bfe6fff5",
          position: "relative",
          width: "100%",
          marginTop: -50,
        }}
      >
        <button
          className="scroll-left"
          style={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "#fff",
            border: "none",
            cursor: "pointer",
            padding: 10,
            height: 50,
            width: 50,
          }}
        >
          &#10094;
        </button>

        <div className="cart-container">
          <div className="cart-container-child">
            <div className="card">
              <h1>
                <p>Thirsty Buddha® Coconut Water</p>
              </h1>
              <p>
                Nourish your body with the natural benefits of coconut water.
              </p>
              <button className="button" onClick={handleViewAll}>
                View All
              </button>
              <div className="card-body">
                <p className="card-text">
                  <img
                    id="card-img"
                    src="https://buddhabrands.ca/cdn/shop/files/coco-water_390x310.png?v=1681418888"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="cart-container-child">
            <div className="card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "rgb(30, 185, 53)" }}
              >
                <div className="parent">
                  <img
                    className="card-img-1"
                    src="https://buddhabrands.ca/cdn/shop/files/Lines_600x.png?v=1676471949"
                  />
                  <img
                    className="card-img-2"
                    src="https://cdn.accentuate.io/6305467334844/1676753812851/classic-coconut-water-hover.png?v=1676753812851"
                  />
                </div>
              </div>
              <div className="card-body">
                <h4>
                  <p className="card-text">Classic Coconut Water</p>
                </h4>
                <p>
                  490ml <span style={{ margin: "10px" }}></span> Pack of 12
                </p>
                <p style={{ textAlign: "right" }}>$39.48</p>
              </div>
            </div>
          </div>

          <div className="cart-container-child">
            <div className="card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "rgb(30, 136, 185)" }}
              >
                <div className="parent">
                  <img
                    className="card-img-1"
                    src="https://buddhabrands.ca/cdn/shop/files/Lines_600x.png?v=1676471949"
                  />
                  <img
                    className="card-img-2"
                    src="https://cdn.accentuate.io/6305467498684/1676123772448/seller2-hover.webp?v=1679003348888"
                  />
                </div>
              </div>
              <div className="card-body">
                <h4>
                  <p className="card-text">Coconut Water with Pulp</p>
                </h4>
                <p>
                  490ml <span style={{ margin: "10px" }}></span> Pack of 12
                </p>
                <p style={{ textAlign: "right" }}>$39.48</p>
              </div>
            </div>
          </div>

          <div className="cart-container-child">
            <div className="card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "rgba(240, 205, 27, 0.945)" }}
              >
                <div className="parent">
                  <img
                    className="card-img-1"
                    src="https://buddhabrands.ca/cdn/shop/files/Lines_600x.png?v=1676471949"
                  />
                  <img
                    className="card-img-2"
                    src="https://cdn.accentuate.io/6305467793596/1676120378555/seller1-hover.png?v=1676120378555"
                  />
                </div>
              </div>
              <div className="card-body">
                <h4>
                  <p className="card-text">
                    Premium Organic Coconut Water 12x1L
                  </p>
                </h4>
                <p>
                  1L <span style={{ margin: "10px" }}></span> Pack of 12
                </p>
                <p style={{ textAlign: "right" }}>$77.99</p>
              </div>
            </div>
          </div>

          <div className="cart-container-child">
            <div className="card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "rgba(240, 205, 27, 0.945)" }}
              >
                <div className="parent">
                  <img
                    className="card-img-1"
                    src="https://buddhabrands.ca/cdn/shop/files/Lines_600x.png?v=1676471949"
                  />
                  <img
                    className="card-img-2"
                    src="https://cdn.accentuate.io/6305467793596/1676120378555/seller1-hover.png?v=1676120378555"
                  />
                </div>
              </div>
              <div className="card-body">
                <h4>
                  <p className="card-text">
                    Premium Organic Coconut Water 500ml
                  </p>
                </h4>
                <p>
                  500ml <span style={{ margin: "10px" }}></span> Pack of 12
                </p>
                <p style={{ textAlign: "right" }}>$41.99</p>
              </div>
            </div>
          </div>

          <div className="cart-container-child">
            <div className="card">
              <div
                className="card-img-top"
                style={{ backgroundColor: "rgba(240, 205, 27, 0.945)" }}
              >
                <div className="parent">
                  <img
                    className="card-img-1"
                    src="https://buddhabrands.ca/cdn/shop/files/Lines_600x.png?v=1676471949"
                  />
                  <img
                    className="card-img-2"
                    src="https://cdn.accentuate.io/6305467793596/1676120378555/seller1-hover.png?v=1676120378555"
                  />
                </div>
              </div>
              <div className="card-body">
                <h4>
                  <p className="card-text">
                    Premium Organic Coconut Water 6x1L
                  </p>
                </h4>
                <p>
                  1L <span style={{ margin: "10px" }}></span> Pack of 6
                </p>
                <p style={{ textAlign: "right" }}>$40.99</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="scroll-right"
          style={{
            position: "absolute",
            marginTop: "38px",
            top: "44%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "#fff",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            height: "50px",
            width: "50px",
          }}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default SecondContainer;
