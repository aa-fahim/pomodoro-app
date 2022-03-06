import React from "react";
import ExpandableFlatList from "../components/ExpandableFlatList";
import Typography from "../components/Typography";

import styled from "styled-components/native";
import { themes } from "../styles/themes";
import ScreenContainer from "../styles/ScreenContainer";
import Wrapper from "../styles/Wrapper";

const ProgressItems = [
  {
    label: "Today",
    timeSpentStudying: 100
  },
  {
    label: "Past 7 days",
    timeSpentStudying: 200
  },
  {
    label: "Past 30 days",
    timeSpentStudying: 200
  },
  {
    label: "Past year",
    timeSpentStudying: 200
  },
]

const ProfileScreen = () => {
  const renderLabel = (text: string) => (
    <Typography color={themes.white}>
      {text}
    </Typography>
  )

  return (
    <ScreenContainer>
      <StyledWrapper>
        {ProgressItems.map((item, index) => (
          <>
            <ExpandableFlatList key={`${item.label}-${index}`} label={renderLabel(item.label)}>
              {item.timeSpentStudying}
            </ExpandableFlatList>
            {/* TODO: make this into a reusuable component */}
            <Spacer />
          </>
        ))
        }
      </StyledWrapper>
    </ScreenContainer>
  );
};

const StyledWrapper = styled(Wrapper)`
  padding: 10px 20px;
`

const Spacer = styled.View`
  height: 20px;
`

export default ProfileScreen;
