import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Category from '../models/Category';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

interface ICategoyGritTileProps {
  category: Category;
  onSelect: () => void;
}

const CategoyGritTile: React.FunctionComponent<ICategoyGritTileProps> = ({
  category,
  onSelect,
}) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{height: '100%'}} onPress={onSelect}>
        <View
          style={{...styles.container, ...{backgroundColor: category.color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {category.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    overflow: 'hidden',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default CategoyGritTile;
