import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import Colors from '../constans/Colors';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  FiltersStackNavigator,
  FiltersStackNavigatorName,
} from 'navigation/FiltersStackNavigator';

const FilterSwitch = ({label, state, onChange}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Colors.secondaryColor}
        value={state}
        onValueChange={(newValue) => onChange(newValue)}
      />
    </View>
  );
};

interface IFiltersScreenProps {
  navigation: StackNavigationProp<
    FiltersStackNavigator,
    FiltersStackNavigatorName.Filters
  >;
}

const FiltersScreen: React.FunctionComponent<IFiltersScreenProps> = ({
  navigation,
}) => {
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  };

  useEffect(() => {
    console.log('use effect');
    navigation.setParams({save: saveFilters});
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" state={isVegan} onChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={setIsVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FiltersScreen;
