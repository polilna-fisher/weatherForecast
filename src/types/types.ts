import {translateCIty} from "../utils/utils";

export interface InitialState {
    loading: boolean
    error: boolean
    forecast: IForecast
    selectedCitiesList: ICity[]
    currentCity: string | null
    chosenCity:  string | null
}

export type ForecastCurrentFetchPayload = { latitude: number; longitude: number } | undefined

export interface IForecast{
    currentTemp: string,
    feelsLike: string,
    sunrise: string,
    sunset: string,
    weather: string,
    weatherIcon: string,
    humidity: string,
    windSpeed: string,
    cloud: string,
    uv: string,
    pressure: string,
    hoursForecast: string,
    city: string
}
export interface ICity {
    id: number,
    label: string,
    latitude: number,
    longitude: number,
    cityName: string
}
export interface IHour{
    time:string | undefined,
    icon:string | undefined,
    temperature:string | undefined,
    uv:string | undefined,
    feelsLike:string | undefined
    key?:string | undefined
}
export interface IDailyForecast{
    currentTemp: string,
    feelsLike: string,
    sunrise: string,
    sunset: string,
    weather: string,
    weatherIcon: string,
    humidity: string,
    windSpeed: string,
    pressure: string,
    uv: string
}

