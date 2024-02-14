import './App.css';
import WholeContent from "../wholeContent/wholeContent";
import Header from "../header/header";
import NavBar from "../navBar/navBar";
import {useState, useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {getCoords} from "../servises/locationService";
import {getForecast} from "../servises/apiService";
import {cities} from "../utils/cities";

function App() {
    const [selectedItems, setSelectedItems] = useState()
    const [currentCity, setCurrentCity] = useState('')
    const [forecast, setForecast] = useState({})

    const fetchCurrentForecast = async () => {
        const {latitude, longitude} = await getCoords()
        const data = await getForecast({latitude, longitude})
        setForecast(data)
        setCurrentCity(data.city)
    }

    const fetchChosenForecast = async (cityName) => {
        const chosenCity = cities.find(item => {
            return item.label === cityName
        })
        if (chosenCity) {
            const data = await getForecast({latitude: chosenCity.latitude, longitude: chosenCity.longitude})
            setForecast(data)
        }
    }

    useEffect(() => {
        fetchCurrentForecast()
    }, [])


    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('selectedItems')) || []
        setSelectedItems(list)
    }, [])

    const addSelectedItemToLocalStorage = (id) => {
        let list = JSON.parse(localStorage.getItem('selectedItems')) || []
        if (list?.includes(id)) {
            list = list.filter(el => el !== id)
        } else {
            list.push(id)
        }
        setSelectedItems(list)
        localStorage.setItem('selectedItems', JSON.stringify(list))
    }


    return (
        <Router>
            <div className="App">
                <NavBar currentCity={currentCity} chosenCity={forecast.city}
                        addSelectedItemToLocalStorage={addSelectedItemToLocalStorage}
                        selectedItems={selectedItems}
                        fetchCurrentForecast={fetchCurrentForecast}
                        fetchChosenForecast={fetchChosenForecast}/>
                <div>
                    <Header
                        addSelectedItemToLocalStorage={addSelectedItemToLocalStorage}
                        selectedItems={selectedItems}
                        fetchChosenForecast={fetchChosenForecast}
                    />
                    <WholeContent forecast={forecast}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
