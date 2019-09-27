import React from 'react';
import { View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  Platform
} from 'react-native';
import {CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealsNavigation from '../navigation/MealsNavigator';
import CategoryGridTails from '../Components/CategoryGridTails';

const CategoriesScreen = props => {
  const renderGridItem =(itemData) => {
    return(
        <CategoryGridTails title={itemData.item.title} 
        color = {itemData.item.color}
        onSelect={()=>{
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              CategoryId: itemData.item.id
            }
          })
        }}/>
      )
  }
  return (
    <FlatList keyExtractor = {(item, index) => item.id} 
    data = {CATEGORIES} 
    renderItem={renderGridItem} 
    numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
