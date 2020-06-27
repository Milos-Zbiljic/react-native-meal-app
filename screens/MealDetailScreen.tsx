import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {
  StackNavigator,
  MealStackNavigatorName,
} from '../navigation/MealsStackNavigator';
import HeaderButton from '../components/HeaderButton';
import {MEALS} from '../data/dummy-data';
import {ScrollView} from 'react-native-gesture-handler';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.boldText}>{props.children}</Text>
    </View>
  );
};

interface IMealDetailScreenProps {
  navigation: StackNavigationProp<
    StackNavigator,
    MealStackNavigatorName.MealDetails
  >;
  route: RouteProp<StackNavigator, MealStackNavigatorName.MealDetails>;
}

const MealDetailScreen: React.FunctionComponent<IMealDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);

  navigation.setOptions({
    title: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log('123')}
        />
      </HeaderButtons>
    ),
  });

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal?.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.boldText}>{selectedMeal?.duration}</Text>
        <Text style={styles.boldText}>
          {selectedMeal?.complexity.toUpperCase()}
        </Text>
        <Text style={styles.boldText}>
          {selectedMeal?.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient) => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step) => {
        return <ListItem>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  boldText: {
    fontFamily: 'OpenSans-Bold',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
