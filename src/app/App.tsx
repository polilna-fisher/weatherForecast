import './App.css';
import WholeContent from "../wholeContent/wholeContent";
import Header from "../header/header";
import NavBar from "../navBar/navBar";
import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {forecastActions} from "../redux/slice";


const App:FC = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(forecastActions.forecastFetch())
        dispatch(forecastActions.getSelectedCitiesFromLocalStorage())
    }, [])


    return (
            <div className="App">
                <NavBar/>
                <div>
                    <Header/>
                    <WholeContent/>
                </div>
            </div>
    );
}

export default App;
