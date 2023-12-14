import React from "react";
import { GrAnnounce } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiCursorClickFill } from "react-icons/pi";

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
            <div class="box seo-box">
              <div class="icon seo-icon">
                <GrAnnounce />
              </div>
              <div>
                <h1>SEO</h1>
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="box mail-box">
              <div class="icon mail-icon">
                <IoMdMail />
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="box sm-box">
              <div class="icon sm-icon">
              <TfiAnnouncement />
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="box ppc-box">
              <div class="icon ppc-icon">
              <PiCursorClickFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
