import React, { ReactNode, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { themes } from "../styles/themes";

type IExpandableFlatList = {
  isOpen?: boolean
  label: ReactNode
  children: ReactNode
};

const CountdownTimer = ({ isOpen = false, label, children }: IExpandableFlatList) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(isOpen);

  return (
    <StyledView>
      <LabelContainer>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          {label}
        </TouchableOpacity>
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
`

const LabelContainer = styled.View`
  display: flex;
  justify-content: center;
  background: ${themes.secondary};
  height: 40px;
  padding: 0px 20px;
  border-radius: 4px;
`

const HorizontalLine = styled.View`
  padding: 10px 0px;
  borderBottomColor: ${themes.grey};
  borderBottomWidth: 1px;
`

export default CountdownTimer;
