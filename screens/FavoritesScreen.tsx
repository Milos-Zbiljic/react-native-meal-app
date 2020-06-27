import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList} from 'react-native-gesture-handler';

import {
  FavoritesMealStackNavigator,
  FavoritesMealStackNavigatorName,
} from '../navigation/FavoritesMealsStackNavigator';

import {MEALS} from '../data/dummy-data';
import Meal from '../models/Meal';
import MealItem from '../components/MealItem';

interface IFavoritesScreenProps {
  navigation: StackNavigationProp<
    FavoritesMealStackNavigator,
    FavoritesMealStackNavigatorName.Favorites
  >;
}

const FavoritesScreen: React.FunctionComponent<IFavoritesScreenProps> = ({
  navigation,
}) => {
  const renderMealItem = ({item}: {item: Meal}) => {
    return (
      <MealItem
        meal={item}
        onSelect={() => {
          navigation.navigate(FavoritesMealStackNavigatorName.MealDetails, {
            mealId: item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={MEALS}
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

export default FavoritesScreen;
