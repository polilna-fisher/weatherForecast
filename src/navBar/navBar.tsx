import './navBar.sass'
import {MouseEvent} from 'react'
import {cities} from "../utils/cities";
import StarWhite from './img/star-white.svg'
import StarYellow from './img/star-yellow.svg'
import {FC, useRef} from "react";
import {forecastActions} from "../redux/slice";
import {ICity} from "../types/types";
import {useAppDispatch, useAppSelector} from "../redux/store";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error/error";

const NavBar:FC = () => {

    const dispatch = useAppDispatch()

    const selectedCitiesList: any = useAppSelector(state => state.foreCast.selectedCitiesList)
    const currentCity:string | null = useAppSelector(state => state.foreCast.currentCity)
    const city:any = useAppSelector(state => state?.foreCast?.forecast?.city)
    const isLoading:boolean = useAppSelector(state => state.foreCast.loading)
    const isError:boolean = useAppSelector(state => state.foreCast.error)


    const onCityClick = (e: MouseEvent<HTMLAnchorElement>, item: ICity):void => {
        e.preventDefault()
        const chosenCity = cities.find(city => {
            return city.label === item.label
        })
        if (chosenCity) {
            dispatch(forecastActions.forecastFetch({ latitude: chosenCity.latitude, longitude: chosenCity.longitude }))
        }
    }
    const onCurrentCityClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(forecastActions.forecastFetch())
    }


    const onCurrentLocationFocus = useRef<any>(null)


    const loading = isLoading ? <Spinner/> : null
    const error = isError ? <ErrorMessage/> : null
    const content = (isLoading || isError) ? null : <a className='nav_header_current_location text_shadow'
                                                       ref={onCurrentLocationFocus}
                                                       onClick={(e) => onCurrentCityClick(e)}>
                                                    {currentCity}</a>
    return (
        <div className='nav_container'>
            <div>
                <h3 className='nav_header'>Current location: </h3>
                {loading}
                {content}
                {error}

            </div>
            {
                !!city && city !== currentCity && <div>
                    <h3 className='nav_header'>Chosen location: </h3>
                    <div className='nav_header_current_location'>{city}</div>
                </div>
            }

            <div>
                <h3 className='nav_header'>Top list: </h3>
                <ul>
                    {
                        cities.map(item => {
                            if(selectedCitiesList?.includes(item.id)){
                                return(
                                    <li key={item.id} className='nav_item_container'>
                                        <a onClick={(e) => onCityClick(e, item)}
                                           className={city===item.label ? 'nav_item_city_name text_shadow' : 'nav_item_city_name'}
                                        >{item.label}</a>
                                        <img className='nav_item_icon_selected'
                                             alt='img' src={selectedCitiesList?.includes(item.id) ? StarYellow : StarWhite}
                                             onClick={() => dispatch(forecastActions.addOrRemoveFromLocalStorage(item.id))}/>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )


}

export default NavBar