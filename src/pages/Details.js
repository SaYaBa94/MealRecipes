import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { MealDetails } from '../components';
import { mealDetailsPageStyle } from '../styles/pagesStyles';

function Details({ route , navigation }) {

    const detailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`;

    const [mealDetail, setMealDetail] = useState({});
    const [ingredients, setIngredients] = useState([]);


    function fetchDetailById() {
        axios.get(detailUrl).then(response => setMealDetail(response.data.meals[0])).then(() => getIngredients())
    }
    useEffect(() => {
        fetchDetailById();
    }, [ingredients]);

    function getIngredients() {

        const arr = [];
        for (let i = 1; i < 21; i++) {
            if (mealDetail["strIngredient" + i] != "" && mealDetail["strIngredient" + i] != null) {
                arr.push({ id: i, name: mealDetail["strIngredient" + i], measure: mealDetail["strMeasure" + i] })
            }
        }
        setIngredients(arr)
    }

    return (
        <ScrollView style={mealDetailsPageStyle.container}>
            <MealDetails ingredients={ingredients} mealDetail={mealDetail} />
        </ScrollView >
    )
}
export { Details }