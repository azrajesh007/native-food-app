import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

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

export default createAppContainer(MealsNavigator);