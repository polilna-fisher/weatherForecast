import {getDate, getTime} from "../utils/utils";
import './location.sass'
import {useSelector} from "react-redux";

const Location = () => {
    const {city} = useSelector(state => state.foreCast.forecast)
    return(
        <div className="location_container">
            <div className="location_date">{getDate()}</div>
            <div className="location_name">{city}</div>
            <div className="location_upd">The report was updated at: {getTime()}</div>
        </div>
    )
}

export default Location