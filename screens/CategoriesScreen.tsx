import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  StackNavigator,
  MealStackNavigatorName,
} from '../navigation/MealsStackNavigator';
import {CATEGORIES} from '../data/dummy-data';
import Category from '../models/Category';
import CategoyGritTile from '../components/CategoryGridTile';

interface ICategoriesScreenProps {
  navigation: StackNavigationProp<
    StackNavigator,
    MealStackNavigatorName.Categories
  >;
}

const CategoriesScreen: React.FunctionComponent<ICategoriesScreenProps> = ({
  navigation,
}) => {
  const renderGridItem = ({item}: {item: Category}) => {
    return (
      <CategoyGritTile
        category={item}
        onSelect={() =>
          navigation.navigate(MealStackNavigatorName.CategoryMeal, {
            categoryId: item.id,
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
