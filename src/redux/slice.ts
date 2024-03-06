import {createSlice} from "@reduxjs/toolkit";
import {IForecast, InitialState} from "../types/types";

const initialState: InitialState = {
    loading: 'isLoading',
    forecast: {} as IForecast,
    selectedCitiesList: [],
    currentCity: null,
}

const forecastSlice = createSlice(
    {
        name: 'forecast',
        initialState,
        reducers: {
            forecastFetching: state => {
                state.loading = 'isLoading'
            },
            forecastFetched: (state, action) => {
                state.loading = 'isLoaded';
                state.forecast = action.payload
            },
            forecastError: state => {
                state.loading = 'isError'
            },
            selectedCities: (state, action) => {
                state.selectedCitiesList = action.payload
            },
            setCurrentCity: (state, action) => {
                state.currentCity = action.payload
            },
            addOrRemoveFromLocalStorage: (state, action) => {
                let list = JSON.parse(localStorage.getItem('selectedItems') || '[]')

                if (list?.includes(action.payload)) {
                    list = list.filter((el: number) => el !== action.payload)
                } else {
                    list.push(action.payload)
                }
                localStorage.setItem('selectedItems', JSON.stringify(list))
                state.selectedCitiesList = list
            },
            getSelectedCitiesFromLocalStorage: (state) => {
                state.selectedCitiesList = JSON.parse(localStorage.getItem('selectedItems') || '[]')
            }
        }
    }
)


export default forecastSlice.reducer

export const forecastActions =  forecastSlice.actions