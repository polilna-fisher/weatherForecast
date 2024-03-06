import Location from "../location/location";
import DailyForecast from "../dailyForecast/dailyForecast";
import HourlyForecast from "../hourlyForecast/hourlyForecast";
import './wholeContent.sass'
import {FC} from "react";

const WholeContent: FC = () => {
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
