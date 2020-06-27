import React from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {
  StackNavigator,
  MealStackNavigatorName,
} from '../navigation/MealsStackNavigator';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList} from 'react-native-gesture-handler';
import Meal from '../models/Meal';
import MealItem from '../components/MealItem';

interface ICategoryMealsScreenProps {
  navigation: StackNavigationProp<
    StackNavigator,
    MealStackNavigatorName.CategoryMeal
  >;
  route: RouteProp<StackNavigator, MealStackNavigatorName.CategoryMeal>;
}

const CategoryMealsScreen: React.FunctionComponent<ICategoryMealsScreenProps> = ({
  navigation,
  route,
}) => {
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === route.params.categoryId,
  );
  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(route.params.categoryId) !== -1,
  );

  navigation.setOptions({
    title: selectedCategory?.title,
  });

  const renderMealItem = ({item}: {item: Meal}) => {
    return (
      <MealItem
        meal={item}
        onSelect={() => {
          navigation.navigate(MealStackNavigatorName.MealDetails, {
            mealId: item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        style={{width: '100%', padding: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
