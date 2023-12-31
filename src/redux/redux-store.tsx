import React from "react";
import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import  thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { compose } from "redux";
import { teamreducer } from "./makingTeamReducer";
import { modeReducer } from "./modeReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


let reducers=combineReducers({
    mode:modeReducer,
    teampage:teamreducer,
});

const persistConfig = {
    key: 'root',
    storage,
  }
   

const persistRed=persistReducer(persistConfig,reducers)


type rootReducer= typeof reducers;

export type AppstateType = ReturnType<rootReducer> ///даная фернкия помогает затраьб тип который возвращает main reducer


type PropertiesType<T> = T extends {[key:string]:infer R}? R : never;

export type ActionsTypeInfern<T extends{[key:string]:(...arg:any)=>any}> = ReturnType<PropertiesType<T>>;


export type BaseThunkType< A extends Action>=ThunkAction<Promise<void>,AppstateType,unknown,A> 



//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(persistRed,composeEnhancers(applyMiddleware(thunkMiddleware)))

 export  const persister=persistStore(store)
// let store=createStore(reducers,applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store=store
export default store
/////

