import {translateCIty} from "../utils/utils";

export interface InitialState {
    loading: string
    forecast: IForecast
    selectedCitiesList: ICity[]
    currentCity: string | null
}

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
    time:string,
    icon:string,
    temperature:string,
    uv:string,
    feelsLike:string
}
export interface IShortForecast{
    time:string,
    condition: IShortForecastCondition,
    temp_c:string,
    uv:string,
    feelslike_c:string
}
interface IShortForecastCondition{
    icon: string
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

