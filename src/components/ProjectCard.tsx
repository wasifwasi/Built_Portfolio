import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";
import { ProjectList } from "../data/ProjectData";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  
`;

export const Card = styled.div`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
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
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.75rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1.5rem;
    color: #666;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }

  @media (min-width: 992px) {
    align-items: flex-start;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;

  a {
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &.PrimaryBtn {
      background-color: #0066ff;
    }

    &.SecondaryBtn {
      background-color: #333;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 5px;
  background-color: #eef3f7;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProjectCard: React.FC = () => {
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
                {list.github_url && (
                  <a
                    className="SecondaryBtn"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url && (
                  <a
                    className="PrimaryBtn"
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
};

export default ProjectCard;
