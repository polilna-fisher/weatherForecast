import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ForecastCurrentFetchPayload, IForecast, InitialState} from "../types/types";

const initialState: InitialState = {
    loading: true,
    error: false,
    forecast: {} as IForecast,
    selectedCitiesList: [],
    currentCity: null,
    chosenCity: null
}

export const forecastSlice = createSlice(
    {
        name: 'forecast',
        initialState,
        reducers: {
            forecastFetch: (state, _action: PayloadAction<ForecastCurrentFetchPayload>) => {
                state.loading = true;
                state.error = false
            },
            forecastFetchSuccess: (state, action) => {
                state.loading = false;
                state.error = false;
                state.forecast = action.payload;
            },
            forecastFetchError: (state) => {
                state.loading = false
                state.error = true
            },
            selectedCities: (state, action) => {
                state.selectedCitiesList = action.payload
            },
            setCurrentCity: (state, action) => {
                state.currentCity = action.payload
            },
            setChosenCity: (state, action) => {
                state.chosenCity = action.payload
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

export const forecastActions = forecastSlice.actions