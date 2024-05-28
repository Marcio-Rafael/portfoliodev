import styled from "styled-components";

const Section = styled.div`
  padding: ${props => props.pad};
  margin: ${props => props.mar};
  color: ${props => props.color};
  background-color: ${props => props.backColor};
  background-image: ${props => props.backImage};
  background-position: ${props => props.pos};
  background-size: 100%;
  background-repeat: no-repeat;
  
  border-bottom: ${props => props.borderBottom};

  @media screen and (max-width: 768px) {
    background-size: 300% !important;
  }
  @media screen and (max-width: 480px) {
    background-size: 500%  !important;
  }
`;

export default Section;
