import styled from "styled-components/native";
import { themes } from "./themes";

const ScreenContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${themes.light_gray};
  padding: 25px;
`;

export default ScreenContainer;
