import React from "react";
import { GrAnnounce } from "react-icons/gr";

const Service = () => {
  return (
    <>
      <div class="svice">
        <div>
          <h1 class="stitle">Our Services</h1>
          <h3 class="detail">
            Lorem lpsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the
          </h3>
        </div>
        <div class="stabs">
          <div class="tab">
            <div class="seo-box">
              <div class="seo-icon">
                <GrAnnounce />
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="mail-box">
              <div class="mail-icon">
                <GrAnnounce />
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="sm-box">
              <div class="sm-icon">
                <GrAnnounce />
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="ppc-box">
              <div class="ppc-icon">
                <GrAnnounce />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
