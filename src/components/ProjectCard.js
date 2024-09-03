import React from "react";
import { ProjectList } from "../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";

import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column; /* Ensure the cards stack vertically */
  min-height: 100vh; /* Ensure the container takes up the full height of the viewport */
  padding: 2rem; /* Optional padding */

`;
export const Card = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  // grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 80%;  /* Set a max-width for the card */
  max-height: 400px;  /* Set a max-height for the card */
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;


export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem; /* Ensuring the image corners match the card */
    transition: transform 0.3s ease-in-out;
    
    &:hover {
      transform: scale(1.05); /* Slight zoom effect on hover */
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  p {
    font-weight: 300;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-center;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #269baa57;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 250;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px #224c52ff;
`;
 
function ProjectCard() {
  return (
    <CardContainer>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </CardContainer>
  );
}

export default ProjectCard;
