import React, {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import {
  RouteProp,
  DrawerActions,
  NavigationProp,
} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import {FiltersStackNavigator} from './FiltersStackNavigator';
import {defaultNavigatorOptions} from './MealsStackNavigator';

export enum FavoritesMealStackNavigatorName {
  Favorites = 'Favorites',
  MealDetails = 'MealDetails',
}

export type FavoritesMealStackNavigator = {
  [FavoritesMealStackNavigatorName.Favorites]: undefined;
  [FavoritesMealStackNavigatorName.MealDetails]: {
    title?: string;
    mealId: string;
  };
};

interface IFavoritesMealStackNavigatorItem {
  name: FavoritesMealStackNavigatorName;
  component: FunctionComponent<any>;
  options?: any;
}

const favoritesMealStackNavigationMap: IFavoritesMealStackNavigatorItem[] = [
  {
    name: FavoritesMealStackNavigatorName.Favorites,
    component: FavoritesScreen,
    options: ({
      route,
      navigation,
    }: {
      route: RouteProp<
        FavoritesMealStackNavigator,
        FavoritesMealStackNavigatorName.Favorites
      >;
      navigation: NavigationProp<FiltersStackNavigator>;
    }) => ({
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
    }),
  },
  {
    name: FavoritesMealStackNavigatorName.MealDetails,
    component: MealDetailScreen,
  },
];

const Stack = createStackNavigator<FavoritesMealStackNavigator>();

const FavoriteMealsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={FavoritesMealStackNavigatorName.Favorites}
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

export default FavoriteMealsStackNavigator;
