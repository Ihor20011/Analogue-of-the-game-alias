
import React from "react";
import { ActionsTypeInfern } from "./redux-store";
const ADDTEAM='ADDTEAM';
const DECREMENT="DECREMENT"
const DELETE="DELETE";
const INCREMENT='INCREMENT'
const ADDWORDS="ADDWORDS"
const OUTWORDS='OUTWORDS'
type singleteam={
    name:string,
    actual:boolean,
    id:number,
    counter:number
}
const initialState={
    teams:[] as Array<singleteam>,
    arrayWithWords:[] as Array<string>
}
type initialStateType=typeof initialState
export  const teamreducer=(state=initialState,action:actionsType):initialStateType=>{
switch(action.type){
    case ADDTEAM:{
        const newtime={
            name:action.name,
            actual:true,
            id:state.teams.length,
            counter:0
        }
        return{...state,
        teams:[...state.teams,newtime]
        }
    }
    case DELETE:{
        const deleting=(arr=state.teams,value=action.id)=>{
            return arr.filter(el=>el.id!== value)
        }
        const newarr=deleting()
        return{...state,
        teams:[...newarr]
        }
    }
    case INCREMENT:{
        return{...state,
        teams:state.teams.map((element,index)=>{
            if (element.name===action.name){
                return {...element,
                counter:element.counter+1
                }
            }
            return element
        })
        }
    }
    case DECREMENT:{
        return {...state,
        teams:state.teams.map((element,index)=>{
            if (element.name===action.name){
                return{...element,
                counter:element.counter-1
                }
            }
            return element
        })
        }
    }
    case ADDWORDS:{
     return{...state,
    arrayWithWords:[...state.arrayWithWords,action.word]
    } 
    }
    case OUTWORDS:{
        return{...state,
        arrayWithWords:[]
        }
    }
    
    default:
        return state
}
}
type actionsType=ActionsTypeInfern<typeof actions>
export const actions={
    addNewGuy:(name:string)=>{return{
        type:ADDTEAM,
        name:name
    } as const},
    deleteTEam:(id:number)=>{return{
        type:DELETE,
        id:id
    } as const},
    incrementCounter:(name:string)=>{return{
        type:INCREMENT,
        name:name
    } as const 
    }   ,
    addWords:(word:string)=>{return{
        type:ADDWORDS,
        word:word
    }  as const
    },
    outWords:()=>{return{
        type:OUTWORDS
    } as const }  ,
    deicrement:(name:string)=>{return{
        type:DECREMENT,
        name:name 
    } as const } ,
}
