import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppstateType } from "../../redux/redux-store";
import { actions } from "../../redux/makingTeamReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionsMode } from "../../redux/modeReducer";
import s from './makeTeam.module.css'
 export const MakingTeam=()=>{
    const [inputforName,setInputStatus]=useState(false)
    let inputRef=useRef('')

    const navigate=useNavigate()
    const ret=()=>{
        navigate('/Setings')
    }
    const teams=useSelector((state:AppstateType)=>state.teampage.teams);
    const dispatch=useDispatch()

    const adding=(name:string)=>{
        if (teams.length<4){
            dispatch(actions.addNewGuy(name))
        }
        setInputStatus((prev)=>!prev)
       dispatch(actionsMode.addTeamArray(name))
    }
    const deleteTeam=(id:number)=>{
     dispatch(actions.deleteTEam(id))
    }
    const teamsOnthePage=teams.map((elem,i)=>{
        return <div key={i} >{elem.name} <button onClick={()=>{console.log(elem.id); deleteTeam(elem.id)} } >delete</button> </div>
    })
    return(
        <div>
            <div className={s.top} onClick={ret}>Вы должны выбрать минимум 2 команды</div>
            <div className={s.teams}>
                {teamsOnthePage}
            </div>
            {
                inputforName&&
                <div className={s.inputteam}>
                <p>Новое название для команды</p>
                <input type="text" onChange={(e)=>{inputRef.current=e.currentTarget.value;}} />
                <button onClick={()=>{adding(inputRef.current)}}>Add team</button>
                </div>
            }
            <div className={s.add} onClick={()=>{setInputStatus((prev)=>!prev)}} >+</div>
            <div className={s.instruction}> </div>
            <button  disabled={teams.length>=2?false:true}  className={s.continue} onClick={ret}>Next</button>
        </div>
    )
}