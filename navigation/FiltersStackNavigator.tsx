import React, {FunctionComponent} from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Colors from '../constans/Colors';
import FiltersScreen from '../screens/FiltersScreen';
import {
  RouteProp,
  DrawerActions,
  NavigationProp,
} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import {defaultNavigatorOptions} from './MealsStackNavigator';

export enum FiltersStackNavigatorName {
  Filters = 'Filters',
}

export type FiltersStackNavigator = {
  [FiltersStackNavigatorName.Filters]: {save: () => void};
};

interface IFiltersStackNavigatorItem {
  name: FiltersStackNavigatorName;
  component: FunctionComponent<any>;
  options?: any;
}

const favoritesMealStackNavigationMap: IFiltersStackNavigatorItem[] = [
  {
    name: FiltersStackNavigatorName.Filters,
    component: FiltersScreen,
    options: ({
      route,
      navigation,
    }: {
      route: RouteProp<
        FiltersStackNavigator,
        FiltersStackNavigatorName.Filters
      >;
      navigation: NavigationProp<FiltersStackNavigator>;
    }) => ({
      title: 'Filters',
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          </HeaderButtons>
        );
      },
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Save"
              iconName="ios-save"
              onPress={route.params.save}
            />
          </HeaderButtons>
        );
      },
    }),
  },
];

const Stack = createStackNavigator<FiltersStackNavigator>();

const FiltersStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={FiltersStackNavigatorName.Filters}
      screenOptions={defaultNavigatorOptions}>
      {favoritesMealStackNavigationMap.map((navigation) => {
        return (
          <Stack.Screen
            key={navigation.name}
            name={navigation.name}
            component={navigation.component}
            options={navigation.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default FiltersStackNavigator;
