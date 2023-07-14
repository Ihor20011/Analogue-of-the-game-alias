import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import s from './setings.module.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { actionsMode } from "../../redux/modeReducer";
import { useDispatch } from "react-redux";
export  const  Settings=()=>{
    //const [test,setTest]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const ret=()=>{
        navigate('/New')
    }
    const go=()=>{
        navigate('/Mode')
    }
    const variant=['true','false']
    const formik=useFormik({
        initialValues:{
            countofWords:'',
            time:'',
            dangerfor:'false'
        },
        onSubmit:(valuse)=>{
            dispatch(actionsMode.setObjectSettings(valuse))
            go()
        },
        validationSchema:Yup.object().shape({
            countofWords:Yup.string().required('this very important for your game'),
            time:Yup.string().required('you have to put value'),
            dangerfor:Yup.string().required('choose what you wnat')
        })
    })
    return (
        <div>
        <div className={s.return} onClick={ret}> Настройки </div>
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <p className={s.block}>
            <label htmlFor="countofWords"  className={s.label}> Количество слов </label>
            <div className={s.flex}>
            <p className={s.par}>Для победы</p>
            <div className={s.showBlock}>{formik.values.countofWords}</div>
            </div>
            <input className={s.input} type="text" id="countofWords" name="countofWords" onBlur={formik.handleBlur} 
            value={formik.values.countofWords}
            onChange={formik.handleChange}
            />
           
            {formik.touched.countofWords&&formik.errors.countofWords?
            <p className={s.eror}>{formik.errors.countofWords}</p>:null    
            }
            </p>
            <p className={s.block}>
            <label  className={s.label} htmlFor="time"> Количество секунд </label>
            <div className={s.flex}>
            <p className={s.par}>Длительность раунда</p>
            <div className={s.showBlock}>{formik.values.time}</div>
            </div>
            <input className={s.input} type="text" id="time" name="time" onBlur={formik.handleBlur} 
            onChange={formik.handleChange}
            />
            {formik.touched.time&&formik.errors.time?
            <p className={s.eror}>{formik.errors.time}</p>:null    
            }
            </p>
            <p className={s.block}>
            <label  className={s.label} htmlFor="dangerfor">Штраф за пропуск</label>
            <div className={s.flex}>
            <p className={s.par}>Если вы пропустите слово вы потеряете бал</p>
            <div  className={s.showBlock}>{formik.values.dangerfor}</div>
            </div>
            <select  className={s.select} name="dangerfor" id="dangerfor" onChange={(e)=>{formik.values.dangerfor=e.currentTarget.value;console.log(formik.values.dangerfor);}}
            >
            <option value="false">false</option>
            <option value="true">true</option>
            </select>
            </p>
            <button   className={s.formbtn} type="submit">Далле</button>
        </form>
        </div>
    )
}