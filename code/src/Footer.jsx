import React from "react";

const Footer = () => {
  return (
    <div className="w-screen m-0 h-20 p-3 absolute bottom-0 flex items-center justify-center bg-gray-950 text-gray-500 md:text-lg text-sm flex-col sm:flex-row">
      <p>&#169; Literary and Debating Club, NITC. All rights reserved.{"  "}</p>
      <a href="https://github.com/vinitkesh/" className="text-yellow-800 px-5">
        Made with {"<3"} by VK
      </a>
    </div>
  );
};

export default Footer;
