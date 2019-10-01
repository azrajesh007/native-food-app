import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsNavigation from '../navigation/MealsNavigator';
import Colors from '../constants/Colors'
import Meal from '../models/meal';
import MealItem from '../Components/mealItem'; 


const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('CategoryId');
  
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
    ); 
     
  const renderMealItem = itemData => {
    return (
      <MealItem 
        title={itemData.item.title}
        duration ={itemData.item.duration}
        complexity = {itemData.item.complexity}
        affordability = {itemData.item.affordability}
        image = {itemData.item.imageUrl} 
        onSelectMeal={()=>{
          props.navigation.navigate({routeName:"MealDetail",params:{
            mealId: itemData.item.id
          }})
        }}/>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList data={ displayedMeals} keyExtractor={(item, index)=>item.id} renderItem={renderMealItem} style={{width: '100%'}}/>
    </View>
  );
};

//navigation
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
    alignItems: 'center',
    padding: 10
  }
});

export default CategoryMealScreen;
