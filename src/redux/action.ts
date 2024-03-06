// import {IForecastAction} from "./types";
// import {ICity, IForecast} from "../types/types";
//
//
// export const forecastFetching = (): IForecastAction => {
//     return {
//         type: 'FORECAST_FETCHING'
//     }
// }
// export const forecastFetched = (data: IForecast): IForecastAction => {
//     return {
//         type: 'FORECAST_FETCHED',
//         payload: data
//     }
// }
// export const forecastError = (): IForecastAction => {
//     return {
//         type: 'FORECAST_ERROR',
//     }
// }
// export const selectedCities = (cities: ICity[]): IForecastAction => {
//     return {
//         type: 'SELECTED_CITIES',
//         payload: cities
//     }
// }
// export const getCurrentCity = (city:string): IForecastAction => {
//     return {
//         type: 'CURRENT_CITY',
//         payload: city
//     }
// }
// export const addOrRemoveFromLocalStorage = (id:number): IForecastAction => {
//     return {
//         type: 'ADD_OR_REMOVE_FROM_LOCAL_STORAGE',
//         payload: id
//     }
// }
// export const getSelectedCitiesFromLocalStorage = (): IForecastAction => {
//     return {
//         type: 'GET_SELECTED_CITIES_FROM_LOCAL_STORAGE',
//     }
// }