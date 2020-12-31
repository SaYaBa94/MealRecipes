import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { categoryListItem } from "../styles/componentsStyles";

function CategoryListItem({ category, onNavigate }) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={categoryListItem.container} onPress={() => onNavigate()} >
            <ImageBackground
                style={categoryListItem.imageBackground}
                source={{ uri: category.strCategoryThumb }}
            >
                <Text style={categoryListItem.title}>{category.strCategory}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export { CategoryListItem }