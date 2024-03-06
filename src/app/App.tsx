import './App.css';
import WholeContent from "../wholeContent/wholeContent";
import Header from "../header/header";
import NavBar from "../navBar/navBar";
import {FC, useEffect} from "react";
import {getForecast} from "../servises/apiService";
import {cities} from "../utils/cities";
import {useDispatch} from "react-redux";
import {forecastActions} from "../redux/slice";
import {getCoords} from "../servises/locationService";


const App:FC = () => {
    const dispatch = useDispatch()

    const fetchCurrentForecast = async ():Promise<void> => {
        dispatch(forecastActions.forecastFetching())
        const {latitude, longitude}:GeolocationCoordinates = await getCoords()
        getForecast({latitude, longitude})
            .then(data => dispatch(forecastActions.forecastFetched(data)))
            .then(data => dispatch(forecastActions.setCurrentCity(data.payload.city)))
            .catch(() => dispatch(forecastActions.forecastError()))

    }

    const fetchChosenForecast = (cityName:string): void  => {
        const chosenCity = cities.find(item => {
            return item.label === cityName
        })
        if (chosenCity) {
            getForecast({latitude: chosenCity.latitude, longitude: chosenCity.longitude})
                .then(data => {
                    dispatch(forecastActions.forecastFetched(data))
                })
                .catch(() => dispatch(forecastActions.forecastError()))
        }
    }


    useEffect(() => {
        fetchCurrentForecast()
        dispatch(forecastActions.getSelectedCitiesFromLocalStorage())
    }, [])


    return (
            <div className="App">
                <NavBar fetchChosenForecast={fetchChosenForecast} fetchCurrentForecast={fetchCurrentForecast}/>
                <div>
                    <Header
                        fetchChosenForecast={fetchChosenForecast}
                    />
                    <WholeContent/>
                </div>
            </div>
    );
}

export default App;
