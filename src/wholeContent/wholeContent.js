import Location from "../location/location";
import DailyForecast from "../dailyForecast/dailyForecast";
import HourlyForecast from "../hourlyForecast/hourlyForecast";
import './wholeContent.sass'

const WholeContent = ({ forecast }) => {
    return(
        <div className='main_container'>
            <div className='main_container_top'>
                <Location city={forecast?.city}/>
                <DailyForecast
                    currentTemp={forecast?.currentTemp}
                    feelsLike={forecast?.feelsLike}
                    sunrise={forecast?.sunrise}
                    sunset={forecast?.sunset}
                    weather={forecast?.weather}
                    weatherIcon={forecast?.weatherIcon}
                    humidity={forecast?.humidity}
                    windSpeed={forecast?.windSpeed}
                    pressure={forecast?.pressure}
                    uv={forecast?.uv}
                />
            </div>

                <HourlyForecast hoursForecast={forecast?.hoursForecast}/>
        </div>
    )

}

export default WholeContent