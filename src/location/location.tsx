import {getDate, getTime} from "../utils/utils";
import './location.sass'
import {useSelector} from "react-redux";
import {FC} from "react";

const Location:FC = () => {
    const {city}:{city:string} = useSelector((state:Record<string, any>) => state.foreCast.forecast)
    return(
        <div className="location_container">
            <div className="location_date">{getDate()}</div>
            <div className="location_name">{city}</div>
            <div className="location_upd">The report was updated at: {getTime()}</div>
        </div>
    )
}

export default Location