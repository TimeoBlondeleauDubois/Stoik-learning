import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const Header = ({ header }) => {
  console.log(header.data.buttonlink)
  return (
      <header>
        <h1>Header</h1>
        <PrismicNextImage field={header.data.logo} />
      </header>
    )
}

export default Header;