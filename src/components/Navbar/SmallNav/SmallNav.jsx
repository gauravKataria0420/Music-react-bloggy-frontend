import React from "react";

const SmallNav = () => {
  return (
    <>
      <div className="container-fluid bg-black d-none d-lg-block px-5">
        <div className="smallnav-wrapper ">
          <p className="text-light">
            Limited Offer :{" "}
            <span className="text-orange ms-1">
              1 T-shirt free on ₹ 1000 rupees shopping.
            </span>
          </p>
          <p className="text-light">
            Call us now:{" "}
            <span className="text-orange ms-1 pointer-cursor">
              +91 6392 51 2406
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallNav;
