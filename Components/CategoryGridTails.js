import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryGridTails = props => {
    return(
        <TouchableOpacity style= {styles.gridItem} onPress={props.onSelect}>
            <View>
                <Text style= {{backgroundColor: props.color}}>{props.title}</Text>
            </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 50
    }
})

export default CategoryGridTails;

