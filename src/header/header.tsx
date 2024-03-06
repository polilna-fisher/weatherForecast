import './header.sass'
import {useState, useMemo, useRef, FC} from "react";
import {cities} from "../utils/cities";
import StarWhite from './img/star-white.svg'
import StarYellow from './img/star-yellow.svg'
import {useDispatch, useSelector} from "react-redux";
import {forecastActions} from "../redux/slice";

interface HeaderProps {
    fetchChosenForecast: (cityName: string) => void
}

const Header: FC<HeaderProps> = ({ fetchChosenForecast }) => {
    const dispatch = useDispatch()

    const selectedCitiesList = useSelector((state:Record<string, any>) => state.foreCast.selectedCitiesList)
    const [isListShown, setIsListShown] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const matchedOptions = useMemo(() => {
        return cities.filter(item => {
            return item.label.toLowerCase().includes(inputValue.toLowerCase())
        })
    }, [inputValue])

    const sendLocationRequest = async () => {
        fetchChosenForecast(inputValue)
        setInputValue('')
    }

    const listHideAllowed = useRef(true)

    return (
        <div className='top_container'>
            <div className='autocomplete_container'>
                <input
                    className='autocomplete_input'
                    placeholder='Enter a city'
                    type="text"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value);
                    }}
                    onFocus={() => {
                        setIsListShown(true)
                    }}
                    onBlur={(event) => {
                        if (listHideAllowed.current === true) {
                            setIsListShown(false)
                        } else {
                            listHideAllowed.current = true
                            event?.target?.focus()
                        }

                    }}
                />
                {!!matchedOptions?.length && isListShown && (<div className={'autocomplete'}>
                    {
                        matchedOptions.map(item => {
                            return (
                                <div key={item.id} className='autocomplete_item_container'>
                                    <div className='autocomplete_option'
                                         onMouseDown={(e) => {
                                             setInputValue(e.currentTarget.innerHTML)
                                         }}>
                                        {item.label}
                                    </div>
                                    <img onMouseDown={() => {
                                        listHideAllowed.current = false
                                    }} className='autocomplete_item_star_img'
                                         alt='star'
                                         src={selectedCitiesList.includes(item.id) ? StarYellow : StarWhite}
                                         onClick={() => dispatch(forecastActions.addOrRemoveFromLocalStorage(item.id))}
                                    />
                                </div>

                            )
                        })
                    }
                </div>)}
            </div>
            <div className='top_container_button'>
                <button className='top_button' onClick={() => sendLocationRequest()}>Get Forecast</button>
            </div>

        </div>
    )

}

export default Header