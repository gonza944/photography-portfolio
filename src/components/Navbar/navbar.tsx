"use client";

import HomeIcon from "@/app/assets/home-icon";
import StyledLinks from "../StyledLink/styledLinks";
import StyledButton from "../StyledButton/styledButton";
import { useState } from "react";

const Navbar = () => {
  const [showAboutSection, setShowAboutSection] = useState(false);
  const handleAboutHover = (shouldShow: boolean) => {
    setShowAboutSection(shouldShow);
  };

  return (
    <div className="flex justify-between mt-4 max-w-[60%]">
      <StyledLinks href="/">{<HomeIcon />}</StyledLinks>
      <div className="flex flex-row gap-80">
        <StyledLinks href="/stories">Stories</StyledLinks>
        <div className="flex flex-row">
          <StyledButton
            isIddle={false}
            onClick={() => {
              handleAboutHover(!showAboutSection);
            }}>
            About
          </StyledButton>
          {showAboutSection && (
            <div className="fixed flex mt-8 gap-4">
              <StyledLinks
                className=" text-primaryColor text-sm"
                href="www.instagram.com">
                Instagram
              </StyledLinks>
              <StyledLinks className=" text-primaryColor text-sm" href="/">
                Contact
              </StyledLinks>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
