import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  nav {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: #068a9bff;
    transition: transform 0.3s ease;
    &:hover {
      opacity: .7;
    transform: rotate(20deg);  
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      font-size: 2.5rem;
      color: #068a9bff;
      &:hover {
        color: #7b99ace5;
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

const FixSocialIcon: React.FC = () => {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <nav>
          <div className="item">
            <a
              href="https://www.linkedin.com/in/wasif-rehman-32210a18b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="item">
            <a
              href="https://github.com/wasifwasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </ScrollAnimation>
    </SocialContainer>
  );
};

export default FixSocialIcon;
