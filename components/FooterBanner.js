import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const FooterBanner = ({
  footerBanner: {
    discount,
    smallText,
    midText,
    largeText1,
    largeText2,
    product,
    buttonText,
    image,
    saleTime,
    desc,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} alt="" className="footer-banner-image"/>
      </div>
    </div>
  );
};

export default FooterBanner;
