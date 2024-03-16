import './dailyForecast.sass'
import Sunrise from "./img/sunrise.png"
import Sunset from "./img/sunset.png"
import UV from "./img/uv.png"
import Pressure from "./img/pressure.png"
import Wind from "./img/wind.png"
import Humidity from "./img/humidity.png"
import {useSelector} from "react-redux";
import {IDailyForecast} from "../types/types";
import {FC} from "react";

const DailyForecast:FC = () => {

    const {currentTemp, feelsLike, sunrise, sunset, weather,
        weatherIcon, humidity, windSpeed, pressure, uv}:IDailyForecast =
        useSelector((state:Record<string, any>) => state.foreCast.forecast)
    return(
        <div className="daily_container">
            <div className="daily_container_left">
                <div>
                    <div className="temperature">{currentTemp}°C</div>
                    <div className="temperature_feels">Feels like:
                        <span className="temperature_feels_degrees"> {feelsLike}°C</span></div>
                </div>
                <div>
                    <div className="sun_container">
                        <div>
                            <img alt="sunrise" src={Sunrise}/>
                        </div>
                        <div>
                            <div className="sun_name">Sunrise </div>
                            <div className="sun_time">{sunrise}</div>
                        </div>
                    </div>
                    <div className="sun_container">
                        <div>
                            <img alt="sunset" src={Sunset}/>
                        </div>
                        <div>
                            <div className="sun_name">Sunset </div>
                            <div className="sun_time">{sunset}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="daily_container_center">
                <img className="weather_icon" alt="weather" src={weatherIcon}/>
                <div className="weather_description">{weather}</div>
            </div>
            <div className="daily_container_right">
                <div className="weather_item">
                    <img className="weather_item_img" alt="" src={Humidity}/>
                    <div>{humidity} %</div>
                    <div>Humidity</div>
                </div>
                <div className="weather_item">
                    <img className="weather_item_img" alt="wind" src={Wind}/>
                    <div>{windSpeed} m/s</div>
                    <div>Wind speed</div>
                </div>
                <div className="weather_item">
                    <img className="weather_item_img" alt="pressure" src={Pressure}/>
                    <div>{pressure} hPa</div>
                    <div>Pressure</div>
                </div>
                <div className="weather_item">
                    <img className="weather_item_img" alt="UV" src={UV}/>
                    <div>{uv}</div>
                    <div>UV</div>
                </div>
            </div>




        </div>
    )
}

export default DailyForecast