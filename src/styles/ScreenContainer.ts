import styled from "styled-components/native";
import { themes } from "./themes";

const ScreenContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${themes.tertiary};
  padding: 25px;
`;

export default ScreenContainer;
