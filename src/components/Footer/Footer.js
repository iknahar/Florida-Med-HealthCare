import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerDiv pt-3 text-center">
      <div>
        <h4 className="pt-2">Florida Medi Center</h4>
      </div>
      <div>
        <h6>Address</h6>
        <p className="p-0">
          246 Arrowood Drive
          <br />
          Jacksonville
          <br />
          Florida
        </p>
        <hr className="w-75 mx-auto" />
      </div>

      <div className="p-2">
        <p>Copyright Ⓒ 2021 Florida Med Center</p>
      </div>
    </div>
  );
};

export default Footer;
