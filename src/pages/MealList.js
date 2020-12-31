import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { mealListStyle } from "../styles/pagesStyles"
import { MealListItem } from '../components'


function MealList({navigation, route}) {

    const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+route.params.categoryName;

    const [mealList, setMealList] = useState([]);

    const renderListByCategory = ({ item }) => <MealListItem meal={item} onNavigate={() => navigation.navigate("Details", {id: item.idMeal})} />

    function fetchMealListByCategory() {
        axios.get(apiUrl).then(response => setMealList(response.data.meals));
    }

    useEffect(() => {
        fetchMealListByCategory();
    }, [])

    return (
        <View style={mealListStyle.container}>
            <FlatList
                keyExtractor={(item) => item.idMeal.toString()}
                data={mealList}
                renderItem={renderListByCategory}
                ListHeaderComponent={<Text style={mealListStyle.title}>{route.params.categoryName}</Text>}
            />
        </View>
    )
}

export { MealList }
