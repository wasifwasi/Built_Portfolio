import { IconButton, Tooltip, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 10px;
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #068a9bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px #a0aab499;
  font-size:35px;
`;

const ScrollToTop: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    shouldRender && (
      <Tooltip
        title="Scroll to top"
        placement="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <StyledIconButton
          size="large"
          aria-label="scroll to top"
          onClick={handleClick}
        >
          <StyledArrowIcon fontSize="large" />
        </StyledIconButton>
      </Tooltip>
    )
  );
};

export default ScrollToTop;
