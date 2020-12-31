import React from 'react'
import { View, Text } from 'react-native'
import { mealDetailsCompStyle } from "../styles/componentsStyles"

function Ingredients(props){
    return(
        <View>
            <Text style={mealDetailsCompStyle.title}>Ingredients</Text>
              {props.ingredients.map((item)=>{
                return (
                <Text key={item.id} style={mealDetailsCompStyle.ingredientText}>•{item.name} - {item.measure} </Text>
             )})}
             
        </View>
    )
}


export {Ingredients}