import Hour from "../hour/hour";
import './hourlyForecast.sass'

const HourlyForecast = (props) => {

    const shortForecast = () => {
         return  props.hoursForecast?.filter(hour => {
             const time = (String(hour?.time)).split(' ')[1]
              return time === '04:00'|| time === '06:00'|| time === '08:00'|| time === '10:00' || time === '12:00'
                  || time === '15:00' || time === '17:00' || time === '19:00' || time === '21:00' || time === '23:00'
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