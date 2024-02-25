import {selectedCities} from "../actions/action";

const initialState = {
    loading: 'isLoading',
    forecast: {},
    selectedCitiesList: [],
    currentCity: null,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORECAST_FETCHING':
            return {
                ...state,
                loading: 'isLoading'
            }
        case 'FORECAST_FETCHED': {
            return {
                ...state,
                loading: 'isLoaded',
                forecast: action.payload
            }
        }
        case 'FORECAST_ERROR':
            return {
                ...state,
                loading: 'isError'
            }
        case 'SELECTED_CITIES':
            return {
                ...state,
                selectedCitiesList: action.payload
            }
        case 'CURRENT_CITY': {
            return {
                ...state,
                currentCity: action.payload
            }
        }
        case 'GET_SELECTED_CITIES_FROM_LOCAL_STORAGE': {
            let list = JSON.parse(localStorage.getItem('selectedItems')) || []
            return {
                ...state,
                selectedCitiesList: list
            }
        }
        case 'ADD_OR_REMOVE_FROM_LOCAL_STORAGE': {
            let list = JSON.parse(localStorage.getItem('selectedItems')) || []
            if (list?.includes(action.payload)) {
                list = list.filter(el => el !== action.payload)
            } else {
                list.push(action.payload)
            }
            localStorage.setItem('selectedItems', JSON.stringify(list))
            return {
                ...state,
                selectedCitiesList: list
            }
        }
        default:
            return state
    }

}

export default reducer