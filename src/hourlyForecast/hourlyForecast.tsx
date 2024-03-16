import Hour from "../hour/hour";
import './hourlyForecast.sass'
import {useSelector} from "react-redux";
import {FC} from "react";

const HourlyForecast: FC = () => {
    const {hoursForecast} = useSelector((state:Record<string, any>) =>state.foreCast.forecast)
    const allowedTime: Record<string, number> = {
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
    const shortForecast = ():any[] => {
         return  hoursForecast?.filter((hour: Record<string, any>) => {
             const time = (String(hour?.time)).split(' ')[1]
              return allowedTime[time]
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