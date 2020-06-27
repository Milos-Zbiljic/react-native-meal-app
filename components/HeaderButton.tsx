import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

interface ICustomHeaderButtonProps {}

const CustomHeaderButton: React.FunctionComponent = (props) => {
  return (
    <HeaderButton {...props} IconComponent={Icon} iconSize={21} color="white" />
  );
};

export default CustomHeaderButton;
