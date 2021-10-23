import styled from "styled-components/native";

export const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  padding: 10px;
  border-width: 5.5px;
  border-color: ${({ lightEffect }) =>
    lightEffect == true ? "#0080FF" : "black"};
  border-radius: 20px;
`;
