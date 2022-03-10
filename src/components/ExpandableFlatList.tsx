import React, { ReactNode, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { themes } from "../styles/themes";
import { AntDesign } from "@expo/vector-icons";

const UpArrowIcon = () => <AntDesign name="up" size={18} color="white" />;
const DownArrowIcon = () => <AntDesign name="down" size={18} color="white" />;

type IExpandableFlatList = {
  isOpen?: boolean;
  label: ReactNode;
  children: ReactNode;
};

const CountdownTimer = ({
  isOpen = false,
  label,
  children,
}: IExpandableFlatList) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(isOpen);

  return (
    <StyledView>
      <LabelContainer>
        <StyledTouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          {label}
          {isExpanded ? <UpArrowIcon /> : <DownArrowIcon />}
        </StyledTouchableOpacity>
      </LabelContainer>

      {isExpanded ? (
        <View>
          {children}
          <HorizontalLine />
        </View>
      ) : null}
    </StyledView>
  );
};

const StyledView = styled.View`
  width: 100%;
`;

const LabelContainer = styled.View`
  display: flex;
  justify-content: center;
  background: ${themes.secondary};
  height: 40px;
  padding: 0px 20px;
  border-radius: 4px;
`;

const HorizontalLine = styled.View`
  padding: 10px 0px;
  borderbottomcolor: ${themes.grey};
  borderbottomwidth: 1px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default CountdownTimer;
