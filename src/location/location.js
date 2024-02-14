import {getDate, getTime} from "../utils/utils";
import './location.sass'

const Location = (props) => {
    return(
        <div className="location_container">
            <div className="location_date">{getDate()}</div>
            <div className="location_name">{props.city}</div>
            <div className="location_upd">The report was updated at: {getTime()}</div>
        </div>
    )
}

export default Location