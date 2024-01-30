"use client";

import useStaleHook from "@/Hooks/useStaleHook";
import { useState } from "react";
import StyledButton from "../Styled-Button/styledButton";
import StyledLinks from "../Styled-Link/styledLinks";

const Navbar: React.FC = () => {
  const [showAboutSection, setShowAboutSection] = useState(false);
  const handleAboutHover = (shouldShow: boolean) => {
    setShowAboutSection(shouldShow);
  };

  const isIddle = useStaleHook(4000);

  return (
    <div className="flex flex-col pt-10 pb-10 max-sm:pl-8 max-sm:pr-8 sticky">
      <div className="flex justify-between items-center max-w-[66%] max-sm:max-w-[100%] max-sm:justify-center max-sm:gap-[33%] ">
        <StyledLinks href="/">
          <p className="font-serif-medium text-xl">GA</p>
        </StyledLinks>
        <StyledLinks isIddle={isIddle} href="/stories">
          Stories
        </StyledLinks>
        <StyledButton
          isIddle={isIddle}
          onClick={() => {
            handleAboutHover(!showAboutSection);
          }}>
          About
        </StyledButton>
      </div>
      {(showAboutSection) && (
        <div className="flex max-w-[37%] self-end max-sm:max-w-[100%] max-sm:self-start max-sm:mt-12">
          <p>
            {`I'm a software engineer and photographer based in Argentina,
            passionate about capturing emotions through thhe lens of a camera.`}
            <StyledLinks
              className=" text-primaryColor text-sm pr-2"
              href="www.instagram.com">
              Instagram
            </StyledLinks>
            <StyledLinks className=" text-primaryColor text-sm" href="/">
              Contact
            </StyledLinks>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
