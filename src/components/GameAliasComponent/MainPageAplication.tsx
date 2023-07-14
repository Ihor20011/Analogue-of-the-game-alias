import React from "react";
import { NavLink } from "react-router-dom";
import s from './Main.module.css'
 export const MainBlock=()=>{
    return(
        <div>
           <div className={s.blue}>
            <div className={s.logo}>VAHA</div>
           </div>
           <div className={s.change}></div>
           <div className={s.buttons}>
               <div><NavLink to={'Next'} className={s.link}>Продолжить</NavLink></div> 
               <div onClick={()=>{window.location.reload()}} ><NavLink to={'New'} className={s.link}>Новая Игра</NavLink> </div> 
               <div><NavLink to={'Rules'} className={s.link}>Правила</NavLink> </div>
           </div>
           <div className={s.black} >Black</div>
        </div>
    )
}