import React from "react";
import s from './mode.module.css'
import { AppstateType } from "../../redux/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionsMode } from "../../redux/modeReducer";
export const Mode=()=>{
const dispatch=useDispatch()
const navigate=useNavigate()    
const ret=()=>{
    navigate('/GamePage')
}
const curentTyoeofGame=(array:Array<string>)=>{
dispatch(actionsMode.chooseType(array))
ret()
}
const categories=useSelector((state:AppstateType)=>state.mode.typeofgame)  
 const showingArray=categories.map((element,index)=>{
    const threeWords=[element.main[0],element.main[1],element.main[2]];
    const wordsstring=threeWords.join(' ,')
    const amount=element.main.length
    return <div className={s.categoriesBlock} onClick={()=>{curentTyoeofGame(element.main)}} >
        <div className={s.logo}>{element.name}</div>
        <div className={s.flex}>
            <div className={s.wordsfromArray}>{wordsstring}</div>
            <div className={s.amountofWords}>{amount}</div>
            </div>
    </div>
 })
return(
    <div>
        <div className={s.return}>Категории</div>
        {showingArray}
        <div className={s.start}></div>
    </div>
)
}