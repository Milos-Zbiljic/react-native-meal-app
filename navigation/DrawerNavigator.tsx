import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {MealStackNavigatorName} from './MealsStackNavigator';
import FiltersStackNavigator, {
  FiltersStackNavigatorName,
} from './FiltersStackNavigator';
import Colors from '../constans/Colors';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <Drawer.Screen
        name={MealStackNavigatorName.Categories}
        component={TabNavigator}
        options={{drawerLabel: 'Meals'}}
      />
      <Drawer.Screen
        name={FiltersStackNavigatorName.Filters}
        component={FiltersStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
