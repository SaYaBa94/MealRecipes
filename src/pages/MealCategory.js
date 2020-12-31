import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import axios from "axios"
import { CategoryListItem } from '../components'
import {mealCategory} from "../styles/pagesStyles"

const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"

function MealCategory(props) {

    const [mealType, setMealCategory] = useState([])
    const renderMealTypes=({ item }) => <CategoryListItem category={item} onNavigate={()=>props.navigation.navigate("MealList" , {categoryName: item.strCategory})} />
    
    useEffect(() => {
        fetchMealCategory()
    }, [])

    function fetchMealCategory() {
        axios.get(apiUrl).then(response=>setMealCategory(response.data.categories)).catch(error=>console.log(error));
    }


    return (
            <View style={mealCategory.container}>
                <FlatList
                    keyExtractor={(item)=>item.idCategory.toString()}
                    data={mealType}
                    renderItem={renderMealTypes}
                    numColumns={2}
                    ListHeaderComponent={<Text style={mealCategory.title}>Categories</Text>}
                />
            </View>
    )
}


export { MealCategory }
