import styled from "styled-components";

const Image = styled.img`
  display: ${props => props.display};
  position: relative;
  width: ${props => props.sizeX};
  margin: ${props => props.mar};
  border-radius: ${props => props.radius};
`;

export default Image;
