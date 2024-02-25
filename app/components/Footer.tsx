"use client"

import React from "react";
import logo from "../images/monito-logo.png";
import fb from "../images/social/fb.png";
import twitter from "../images/social/twitter.png";
import instagram from "../images/social/instagram.png";
import youtube from "../images/social/youtube.png";
import Image from "next/image";

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
      <div className="footer">
        <div className="subscribe-container">
          <span className="subscribe-label">{`Register Now So You Don't Miss Our Programs`}</span>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your Email"
              className="subscribe-email"
            />
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        </div>
        <div className="footer-navs">
          <div className="footer-nav-wrapper">
            <span className="footer-nav-item">Home</span>
            <span className="footer-nav-item">Category</span>
            <span className="footer-nav-item">About</span>
            <span className="footer-nav-item">Contact</span>
          </div>
          <div className="soc-med">
            <Image src={fb} alt={"FB"} width={20} className="socmed-item" />
            <Image
              src={twitter}
              alt={"Twitter"}
              width={20}
              className="socmed-item"
            />
            <Image
              src={instagram}
              alt={"Instagram"}
              width={20}
              className="socmed-item"
            />
            <Image
              src={youtube}
              alt={"Youtube"}
              width={20}
              className="socmed-item"
            />
          </div>
        </div>
        <Image
          src={logo}
          alt={"logo"}
          width={100}
          className="flex md:hidden pt-10"
        />
        <div className="footer-copyrights">
          <span className="text-[13px]  font-[300] text-primary">
            @{year} Monito. All rights reserved.
          </span>
          <Image
            src={logo}
            alt={"logo"}
            width={100}
            className="hidden md:flex"
          />
          <div className="flex items-center gap-8">
            <span className="footer-nav2">Terms Of Service</span>
            <span className="footer-nav2">Privacy Policy</span>
          </div>
        </div>
      </div>
    );
}

export default Footer;
