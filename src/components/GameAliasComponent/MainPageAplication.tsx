import React from "react";
import { NavLink } from "react-router-dom";
import s from './Main.module.css'
import { persister } from "../../redux/redux-store";
 export const MainBlock=()=>{
    const claen=()=>{
        window.location.reload();
        persister.purge()
    }
    return(
        <div>
           <div className={s.blue}>
            <div className={s.logo}>VAHA</div>
           </div>
           <div className={s.change}></div>
           <div className={s.buttons}>
               <div>Продолжить</div> 
               <div onClick={()=>{claen()}} ><NavLink to={'new'} className={s.link}>Новая Игра</NavLink> </div> 
               <div><NavLink to={'Rules'} className={s.link}>Правила</NavLink> </div>
           </div>
           <div className={s.black} >Black</div>
        </div>
    )
}