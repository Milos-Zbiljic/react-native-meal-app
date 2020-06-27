import React, {FunctionComponent} from 'react';
import {
  RouteProp,
  DrawerActions,
  NavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constans/Colors';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

export enum MealStackNavigatorName {
  Categories = 'Categories',
  CategoryMeal = 'CategoryMeal',
  MealDetails = 'MealDetails',
}

export type StackNavigator = {
  [MealStackNavigatorName.Categories]: undefined;
  [MealStackNavigatorName.CategoryMeal]: {
    title?: string;
    categoryId: string;
  };
  [MealStackNavigatorName.MealDetails]: {
    title?: string;
    headerButtonRight?: any;
    mealId: string;
  };
};

interface INavigationItem {
  name: keyof StackNavigator;
  component: FunctionComponent<any>;
  options?: any;
}

const navigationMap: INavigationItem[] = [
  {
    name: MealStackNavigatorName.Categories,
    component: CategoriesScreen,
    options: ({
      navigation,
    }: {
      route: RouteProp<StackNavigator, MealStackNavigatorName.Categories>;
      navigation: NavigationProp<StackNavigator>;
    }) => ({
      title: 'Meal Categories',
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
    name: MealStackNavigatorName.CategoryMeal,
    component: CategoryMealsScreen,
    options: ({
      route,
    }: {
      route: RouteProp<StackNavigator, MealStackNavigatorName.CategoryMeal>;
      navigation: any;
    }) => ({
      headerTitle: route.params.title,
    }),
  },
  {
    name: MealStackNavigatorName.MealDetails,
    component: MealDetailScreen,
    options: ({
      route,
    }: {
      route: RouteProp<StackNavigator, MealStackNavigatorName.MealDetails>;
      navigation: any;
    }) => ({
      headerTitle: route.params.title,
      headerRight: route.params.headerButtonRight,
    }),
  },
];

export const defaultNavigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: 'white',
};

const Stack = createStackNavigator<StackNavigator>();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultNavigatorOptions}
      initialRouteName={MealStackNavigatorName.Categories}>
      {navigationMap.map((navigation) => {
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

export default MealsNavigator;
