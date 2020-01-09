import React from 'react';
import {Header, Title, Body, StyleProvider, getTheme} from 'native-base';
import customVariables from '../theme/variables';

export const AppHeader = () => {
  return (
    <StyleProvider style={getTheme(customVariables)}>
    <Header hasTabs>
      <Body style={{flex: 0.5, alignItems: 'center'}}>
        <Title>OKASHI</Title>
      </Body>
    </Header>
    </StyleProvider>
  );
};
