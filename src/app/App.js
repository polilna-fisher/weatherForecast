import './App.css';
import WholeContent from "../wholeContent/wholeContent";
import Header from "../header/header";
import NavBar from "../navBar/navBar";
import {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {getForecast} from "../servises/apiService";
import {cities} from "../utils/cities";
import { useDispatch } from "react-redux";
import {
    forecastError,
    forecastFetched,
    forecastFetching,
    getCurrentCity,
    getSelectedCitiesFromLocalStorage,
} from "../actions/action";
import {getCoords} from "../servises/locationService";

function App() {
    const dispatch = useDispatch()

    const fetchCurrentForecast = async() => {
        dispatch(forecastFetching())

        const {latitude, longitude} = await getCoords()


        getForecast({latitude, longitude})
            .then(data => dispatch(forecastFetched(data)))
            .then(data => dispatch(getCurrentCity(data.city)))
            .catch(() => dispatch(forecastError()))
    }

    const fetchChosenForecast = (cityName) => {
        const chosenCity = cities.find(item => {
            return item.label === cityName
        })
        if (chosenCity) {
            getForecast({latitude: chosenCity.latitude, longitude: chosenCity.longitude})
                .then(data => {
                    console.log(data);
                    dispatch(forecastFetched(data))
                })
                .catch(() => dispatch(forecastError()))
        }
    }


    useEffect(() => {
        fetchCurrentForecast()
        dispatch(getSelectedCitiesFromLocalStorage())
    }, [])


    return (
        <Router>
            <div className="App">
                <NavBar fetchChosenForecast={fetchChosenForecast} fetchCurrentForecast={fetchCurrentForecast}/>
                <div>
                    <Header
                        fetchChosenForecast={fetchChosenForecast}
                    />
                    <WholeContent/>
                </div>
            </div>
        </Router>
    );
}

export default App;
