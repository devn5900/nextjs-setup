'use client'
import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const combineReducer = combineReducers({
  // add reducer here
  // e.g. userRegister
})

export const store = legacy_createStore(combineReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
