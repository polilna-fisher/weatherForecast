import './navBar.sass'
import {cities} from "../utils/cities";
import StarWhite from './img/star-white.svg'
import StarYellow from './img/star-yellow.svg'
import {useRef, useState} from "react";

const NavBar = ({ currentCity, chosenCity, selectedItems, addSelectedItemToLocalStorage, fetchChosenForecast, fetchCurrentForecast }) => {

    const onCityClick = (e, item) => {
        e.preventDefault()
        fetchChosenForecast(item.label)
    }
    const onCurrentCityClick = (e) => {
        e.preventDefault()
        fetchCurrentForecast()
    }

    const onCurrentLocationFocus = useRef(null)

    return (
        <div className='nav_container'>
            <div>
                <h3 className='nav_header'>Current location: </h3>
                <a className='nav_header_current_location text_shadow'
                   ref={onCurrentLocationFocus}
                   onClick={(e) => onCurrentCityClick(e)}>{currentCity}</a>
            </div>
            {
                !!chosenCity && chosenCity !== currentCity && <div>
                    <h3 className='nav_header'>Chosen location: </h3>
                    <div className='nav_header_current_location'>{ chosenCity }</div>
                </div>
            }

            <div>
                <h3 className='nav_header'>Top list: </h3>
                <ul>
                    {
                        cities.map(item => {
                            if(selectedItems?.includes(item.id)){
                                console.log(chosenCity, 'chosenCity')
                                console.log(item.cityName, 'item.cityName')
                                return(
                                    <li key={item.id} className='nav_item_container'>
                                        <a onClick={(e) => onCityClick(e, item)}
                                           className={chosenCity===item.label ? 'nav_item_city_name text_shadow' : 'nav_item_city_name'}
                                        >{item.label}</a>
                                        <img className='nav_item_icon_selected'
                                             alt='img' src={selectedItems.includes(item.id) ? StarYellow : StarWhite}
                                             onClick={() => {addSelectedItemToLocalStorage(item.id)}}/>
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