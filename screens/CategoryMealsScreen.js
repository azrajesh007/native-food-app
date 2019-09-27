import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealsNavigation from '../navigation/MealsNavigator';
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('CategoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id===catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="go to meal details"  onPress={() =>{
        props.navigation.navigate({routeName: 'MealDetail'})}}/>
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('CategoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
}
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
