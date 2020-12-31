import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import { Ingredients } from "../components/Ingredients";
import { mealDetailsCompStyle } from "../styles/componentsStyles"

function MealDetails(props) {
    return (
        <View>
             <ImageBackground
                style={mealDetailsCompStyle.imageBackground}
                source={{ uri: props.mealDetail.strMealThumb }}
            >
            <Text style={mealDetailsCompStyle.mealTitle}>{props.mealDetail.strMeal}</Text>
            </ImageBackground>
            <Ingredients ingredients={props.ingredients}/>
            <Text style={mealDetailsCompStyle.title}>Instruction</Text>
            <Text style={mealDetailsCompStyle.instructionText}>{props.mealDetail.strInstructions}</Text>
            <TouchableOpacity style={mealDetailsCompStyle.buttonYoutube} onPress={()=>Linking.openURL(props.mealDetail.strYoutube)}>
                <Text style={mealDetailsCompStyle.buttonText}>Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export { MealDetails }
