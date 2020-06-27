import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import Meal from '../models/Meal';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

interface IMealItemProps {
  meal: Meal;
  onSelect: () => void;
}

const MealItem: React.FunctionComponent<IMealItemProps> = ({
  meal,
  onSelect,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={onSelect}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              source={{uri: meal.imageUrl}}
              style={styles.mealImage}>
              <Text style={styles.title} numberOfLines={1}>
                {meal.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text style={{fontFamily: 'OpenSans-Bold'}}>{meal.duration}</Text>
            <Text style={{fontFamily: 'OpenSans-Bold'}}>
              {meal.complexity.toUpperCase()}
            </Text>
            <Text style={{fontFamily: 'OpenSans-Bold'}}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

export default MealItem;
