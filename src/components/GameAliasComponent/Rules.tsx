import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import s from './Rules.module.css'

export const Rules=()=>{ 
  const navigate=useNavigate()
  const ret=()=>{
    navigate('/')
  }
    return(
        <div>
         <div className={s.top}  onClick={ret}>Назад</div>
         <div className={s.logo}>Alias</div>
         <p className={s.para} >Интересная игра для всей компании</p>
         <div className={s.list}>
            <div>Задача каждого игрока обьяснить как модно больше слов товарищам по каманде за ограниченое время</div>
            <div>Во время обьяснить нельзя использовать переводы слов или одноеоренные выражения</div>
            <div>Одгаданое слово приносит очко если слово пропускаеться команда штрафееться </div>
            <div>Побеждает команда у которой набираеться нужное количество очков</div>
         </div>
        </div>
    )
}