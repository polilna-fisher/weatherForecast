import {translateCIty} from "../utils/utils";
import {IForecast} from "../types/types";

const _baseURL = 'http://api.weatherapi.com/v1/forecast.json'
const _apiKey = '24f9912ed6e84d779be144536242701'

export const getData = async (latitude:number, longitude:number): Promise<IForecast | undefined> => {
    const baseApi = `${_baseURL}?q=${latitude},${longitude}&lang=en&key=${_apiKey}`
    try {
        const response = await fetch(baseApi)
        const data:any | undefined = await response.json()
        const preparedData: IForecast = {
            currentTemp: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
            weather: data.current.condition.text,
            weatherIcon: data.current.condition.icon,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_mph,
            cloud: data.current.cloud,
            uv: data.current.uv,
            pressure: data.current.pressure_mb,
            hoursForecast: data.forecast.forecastday[0].hour,
            city: translateCIty(data.location.name)
        }
        return preparedData
    } catch (e) {
        console.log(e)
    }
}

export const getForecast = async ({latitude, longitude}: {latitude: number, longitude: number}): Promise<IForecast | undefined> => {
    const forecast = await getData(latitude, longitude)
    return forecast
}
