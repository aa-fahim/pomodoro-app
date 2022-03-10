import React from "react";
import ExpandableFlatList from "../components/ExpandableFlatList";
import Typography from "../components/Typography";

import styled from "styled-components/native";
import { themes } from "../styles/themes";
import ScreenContainer from "../styles/ScreenContainer";
import Wrapper from "../styles/Wrapper";
import SectionHeader from "../components/SectionHeader";
import OptionItem from "../components/OptionItem";

const ProgressItems = [
  {
    label: "Today",
    timeSpentStudying: 100,
  },
  {
    label: "Past 7 days",
    timeSpentStudying: 200,
  },
  {
    label: "Past 30 days",
    timeSpentStudying: 200,
  },
  {
    label: "Past year",
    timeSpentStudying: 200,
  },
];

const ProfileScreen = () => {
  const renderLabel = (text: string) => (
    <Typography color={themes.white}>{text}</Typography>
  );

  return (
    <ScreenContainer>
      <StyledWrapper>
        {ProgressItems.map((item, index) => (
          <>
            <ExpandableFlatList
              key={`${item.label}-${index}`}
              label={renderLabel(item.label)}
            >
              {item.timeSpentStudying}
            </ExpandableFlatList>
            {/* TODO: make this into a reusuable component */}
            <Spacer />
          </>
        ))}
        <SectionHeader header="Your Progress" />
        <OptionItemsListWrapper>
          <OptionItem optionLabel="Daily Focus Time" option="5:00" />
          <OptionItem optionLabel="Weekly Focus Time" option="3:00" />
          <OptionItem optionLabel="Monthly Focus Time" option="2:00" />
        </OptionItemsListWrapper>

        <OptionItemsListWrapper>
          <OptionItem optionLabel="Daily Focus Goal" option="5:00" />
          <OptionItem optionLabel="Weekly Focus Goal" option="3:00" />
          <OptionItem optionLabel="Monthly Focus Goal" option="2:00" />
        </OptionItemsListWrapper>

        <OptionItemsListWrapper>
          <OptionItem optionLabel="Daily Focus Progress" option="5:00" />
          <OptionItem optionLabel="Weekly Focus Progress" option="3:00" />
          <OptionItem optionLabel="Monthly Focus Progress" option="2:00" />
        </OptionItemsListWrapper>
      </StyledWrapper>
    </ScreenContainer>
  );
};

const StyledWrapper = styled(Wrapper)`
  padding: 10px 20px;
`;

const Spacer = styled.View`
  height: 20px;
`;

const OptionItemsListWrapper = styled.View`
  width: 100%;
  padding-bottom: 15px;
`;

export default ProfileScreen;
