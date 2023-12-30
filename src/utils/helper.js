import React from 'react'

export function filterRestaurants(restaurantsList, inputText) {
    const updatedRestaurantList = restaurantsList.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(inputText.toLowerCase())
    );

    return updatedRestaurantList;
}

