import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from '../constants/Colors';
import {Platform} from 'react-native';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
          headerTitle: 'Meal Categories',
        },
      },

      CategoryMeals: {
        screen: CategoryMealsScreen
      },

      MealDetail: {
        screen: MealDetailScreen
      }
    },
    
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? 'orange' : Colors.primaryColor
        },
        headerTintColor: '#ffffff'
      }
  }
);

const MealFavTabNavigator = createBottomTabNavigator({
  Meals: {screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        }
      }
  },
  Favorite:{ screen: FavoritesScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
        }
  }}
},{
  tabBarOptions:{
    activeTintColor: '#ffffff',
    activeBackgroundColor: 'orange',
    showLabel: false
  }
}
);

export default createAppContainer(MealFavTabNavigator);