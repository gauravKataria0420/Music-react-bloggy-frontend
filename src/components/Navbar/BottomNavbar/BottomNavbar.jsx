import React from "react";
import "./BottomNavbar.css";

const BottomNavbar = () => {
  return (
    <>
      <div className="bottom-nav w-100">
        <div id="" class="  carousel  black-bg slide " data-mdb-ride="carousel">
          <div class=" carousel-inner">
            <div
              class=" carousel-item text-wrapper active"
              data-mdb-interval="3000"
            >
              <h6 className="bottom-nav-text text-light text-center my-auto w-100 text-uppercase">
                Casn on Delivery Available
              </h6>
            </div>
            <div class="carousel-item" data-mdb-interval="4000">
              <h6 className=" bottom-nav-text text-light text-center my-auto w-100 text-uppercase">
                Made in India
              </h6>
            </div>
            <div class="carousel-item" data-mdb-interval="4000">
              <h6 className=" bottom-nav-text text-light text-center my-auto w-100 text-uppercase">
                5 days hassle-free for exchange and returns
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
