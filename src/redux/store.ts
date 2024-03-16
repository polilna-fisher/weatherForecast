import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice';
import {forecastCurrentWatcher} from './saga/forecastSaga'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        foreCast: reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
})

saga.run(forecastCurrentWatcher)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;