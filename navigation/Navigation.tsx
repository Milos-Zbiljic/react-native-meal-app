import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './DrawerNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
