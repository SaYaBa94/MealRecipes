import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { mealListItem } from "../styles/componentsStyles";

function MealListItem({ meal , onNavigate}) {
    return (
        <TouchableOpacity style={mealListItem.container} onPress={()=>onNavigate()}>
            <ImageBackground
                style={mealListItem.imageBackground}
                source={{ uri: meal.strMealThumb }}>
                <Text style={mealListItem.title}>{meal.strMeal}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export { MealListItem }