import React from "react";
import styled from "styled-components/native";

import ScreenContainer from "../styles/ScreenContainer";
import Wrapper from "../styles/Wrapper";
import SectionHeader from "../components/SectionHeader";
import OptionItem from "../components/OptionItem";

const InfoScreen = () => {
  return (
    <ScreenContainer>
      <InfoWrapper>
        <SectionHeader header="About" />
      </InfoWrapper>
    </ScreenContainer>
  );
};

const InfoWrapper = styled(Wrapper)`
  justify-content: flex-start;
  padding: 30px 30px;
`;

export default InfoScreen;
