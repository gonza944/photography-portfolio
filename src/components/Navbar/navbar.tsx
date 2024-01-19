"use client";

import HomeIcon from "@/app/assets/home-icon";
import StyledLinks from "../Styled-Link/styledLinks";
import StyledButton from "../Styled-Button/styledButton";
import { useEffect, useState } from "react";
import useStaleHook from "@/Hooks/useStaleHook";

const Navbar = () => {
  const [showAboutSection, setShowAboutSection] = useState(false);
  const handleAboutHover = (shouldShow: boolean) => {
    setShowAboutSection(shouldShow);
  };
 
  const isIddle = useStaleHook(4000);

  return (
    <div className="flex justify-between mt-4 max-w-[60%] mb-12">
      <StyledLinks href="/">{<HomeIcon />}</StyledLinks>
      <div className="flex flex-row gap-80">
        <StyledLinks isIddle={isIddle} href="/stories">
          Stories
        </StyledLinks>
        <div className="flex flex-row">
          <StyledButton
            isIddle={isIddle}
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
