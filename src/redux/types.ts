import {ICity, IForecast} from "../types/types";



// export type IForecastAction =
//     IActionForecastFetching |
//     IActionForecastFetched |
//     IActionForecastError |
//     IActionSelectedCities |
//     IActionCurrentCity |
//     IActionAddOrRemoveLS |
//     IActionGetSelectedCitiesFromLS
//
// //action types
// interface IActionForecastFetching  {
//     type: 'FORECAST_FETCHING',
// }
//
// interface IActionForecastFetched  {
//     type: 'FORECAST_FETCHED',
//     payload: IForecast
// }
//
// interface IActionForecastError  {
//     type: 'FORECAST_ERROR',
// }
//
// interface IActionSelectedCities  {
//     type: 'SELECTED_CITIES',
//     payload: ICity[]
// }
//
// interface IActionCurrentCity  {
//     type: 'CURRENT_CITY',
//     payload: string
// }
//
// interface IActionAddOrRemoveLS  {
//     type: 'ADD_OR_REMOVE_FROM_LOCAL_STORAGE',
//     payload: number
// }
//
// interface IActionGetSelectedCitiesFromLS  {
//     type: 'GET_SELECTED_CITIES_FROM_LOCAL_STORAGE',
// }