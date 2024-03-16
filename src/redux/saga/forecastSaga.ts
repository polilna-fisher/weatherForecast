import {takeLatest, put, call} from 'redux-saga/effects'
import {getForecast} from "../../servises/apiService";
import {getCoords} from "../../servises/locationService";
import {forecastActions} from "../slice";
import {PayloadAction} from "@reduxjs/toolkit";
import {ForecastCurrentFetchPayload, IForecast} from "../../types/types";

export function* getForecastSaga(action?: PayloadAction<ForecastCurrentFetchPayload>) {

    try{
        let longitude:number = action?.payload?.longitude || 0
        let latitude:number = action?.payload?.latitude || 0

        if (!longitude) {
            const result:GeolocationCoordinates = yield call(getCoords)
            longitude = result.longitude
            latitude = result.latitude
        }

        const payload:IForecast = yield call(getForecast, { latitude, longitude})
        yield put(forecastActions.forecastFetchSuccess(payload))

        if (!action?.payload) {
            yield put(forecastActions.setCurrentCity(payload.city))
        }
    }catch (e){
        yield put(forecastActions.forecastFetchError())
    }
}


export function* forecastCurrentWatcher(): Generator<any>{
    yield takeLatest(forecastActions.forecastFetch, getForecastSaga)
}
