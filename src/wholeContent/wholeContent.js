import Location from "../location/location";
import DailyForecast from "../dailyForecast/dailyForecast";
import HourlyForecast from "../hourlyForecast/hourlyForecast";
import './wholeContent.sass'

const WholeContent = () => {
    return(
        <div className='main_container'>
            <div className='main_container_top'>
                <Location/>
                <DailyForecast/>
            </div>
                <HourlyForecast/>
        </div>
    )

}

export default WholeContent