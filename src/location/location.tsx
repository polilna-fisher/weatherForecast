import {getDate, getTime} from "../utils/utils";
import './location.sass'
import {useSelector} from "react-redux";
import {FC} from "react";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error/error";
import {useAppSelector} from "../redux/store";

const Location:FC = () => {
    const isLoading:boolean = useAppSelector(state => state.foreCast.loading)
    const isError:boolean = useAppSelector(state => state.foreCast.error)
    const {city}:{city:string} = useSelector((state:Record<string, any>) => state.foreCast.forecast)
    const loading = isLoading ? <Spinner/> : null
    const error = isError ? <ErrorMessage/> : null
    const content = (isLoading || isError) ? null : <div className="location_name">{city}</div>

    return(
        <div className="location_container">
            <div className="location_date">{getDate()}</div>
            {loading}
            {error}
            {content}
            <div className="location_upd">The report was updated at: {getTime()}</div>
        </div>
    )
}

export default Location