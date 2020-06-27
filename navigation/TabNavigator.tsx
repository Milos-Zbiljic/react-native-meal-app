import React, {FunctionComponent} from 'react';

import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constans/Colors';
import MealsNavigator from './MealsStackNavigator';
import FavoriteMealsStackNavigator from './FavoritesMealsStackNavigator';
import {Text} from 'react-native';

export enum TabNavigationName {
  Meals = 'Meals',
  Favorites = 'Favorites',
}

interface ITabNavigationItem {
  name: TabNavigationName;
  component: FunctionComponent;
  options: MaterialBottomTabNavigationOptions;
}

const tabNavigationMap = [
  {
    name: TabNavigationName.Meals,
    component: MealsNavigator,
    options: () => ({
      tabBarIcon: ({color}: {color: string}) => {
        // You can return any component that you like here!
        return <Icon name={'ios-restaurant'} size={20} color={color} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text style={{fontFamily: 'OpenSans-Bold'}}>Meals</Text>,
    }),
  },
  {
    name: TabNavigationName.Favorites,
    component: FavoriteMealsStackNavigator,
    options: () => ({
      tabBarIcon: ({color}: {color: string}) => {
        // You can return any component that you like here!
        return <Icon name={'ios-star'} size={20} color={color} />;
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: <Text style={{fontFamily: 'OpenSans-Bold'}}>Favorites</Text>,
    }),
  },
];

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      shifting={true}
      barStyle={{backgroundColor: Colors.primaryColor}}>
      {tabNavigationMap.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
