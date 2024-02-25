import Hour from "../hour/hour";
import './hourlyForecast.sass'
import {useSelector} from "react-redux";

const HourlyForecast = () => {
    const {hoursForecast} = useSelector(state =>state.foreCast.forecast)

    const allowedTIme = {
        '04:00': 1,
        '06:00': 1,
        '08:00': 1,
        '10:00': 1,
        '12:00': 1,
        '15:00': 1,
        '17:00': 1,
        '19:00': 1,
        '21:00': 1,
        '23:00': 1,
    }

    const shortForecast = () => {
         return  hoursForecast?.filter(hour => {
             const time = (String(hour?.time)).split(' ')[1]
              return allowedTIme[time]
        })

    }

    return(
        <div className="hourly_container">
            {
                shortForecast()?.map(hour => {
                    return(
                        <Hour
                            time={hour?.time}
                            icon={hour?.condition?.icon}
                            temperature={hour?.temp_c}
                            uv={hour?.uv}
                            humidity={hour?.humidity}
                            feelsLike={hour?.feelslike_c}
                            key={hour?.time}
                        />
                    )
                })
            }
        </div>

    )
}

export default HourlyForecast