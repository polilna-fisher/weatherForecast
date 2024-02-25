export const forecastFetching = () => {
    return {
        type: 'FORECAST_FETCHING'
    }
}
export const forecastFetched = (data) => {
    return {
        type: 'FORECAST_FETCHED',
        payload: data
    }
}
export const forecastError = () => {
    return {
        type: 'FORECAST_ERROR',
    }
}
export const selectedCities = (cities) => {
    return {
        type: 'SELECTED_CITIES',
        payload: cities
    }
}
export const getCurrentCity = (city) => {
    return {
        type: 'CURRENT_CITY',
        payload: city
    }
}
export const addOrRemoveFromLocalStorage = (id) => {
    return {
        type: 'ADD_OR_REMOVE_FROM_LOCAL_STORAGE',
        payload: id
    }
}
export const getSelectedCitiesFromLocalStorage = () => {
    return {
        type: 'GET_SELECTED_CITIES_FROM_LOCAL_STORAGE',
    }
}