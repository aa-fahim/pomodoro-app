import React from "react";
import ExpandableFlatList from "../components/ExpandableFlatList";

import styled from "styled-components/native";
import { themes } from "../styles/themes";
import ScreenContainer from "../styles/ScreenContainer";
import Wrapper from "../styles/Wrapper";

const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <Wrapper>
        <ExpandableFlatList label="Today" children="Some Text"/>
      </Wrapper>
    </ScreenContainer>
  );
};

export default ProfileScreen;
