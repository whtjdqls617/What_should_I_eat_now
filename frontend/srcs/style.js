import styled from "styled-components/native";

export const Pcontainer = styled.View`
	flex-direction : column;
	align-items : center;
`;

export const Container = styled.View`
	background-color: white;
	flex-direction : row;
`;

export const StyledText = styled.Text`
  font-size: 40px;
  margin-top: 20%;
  font-weight: 800;
`;

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  padding : 40px;
`;

export const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  padding: 10px;
  border-width: 4.5px;
  border-color: ${({ lightEffect }) =>
    lightEffect == true ? "#0080FF" : "black"};
  border-radius: 20px;
`;
export const StyledOptionText = styled.Text`
  font-size: 20px;
  text-align : center;
`;

export const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.Button`
  background-color: red;
`;