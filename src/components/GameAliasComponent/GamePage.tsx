import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppstateType } from "../../redux/redux-store";
import s from './gamePage.module.css'
import { useNavigate } from "react-router-dom";
import { actions } from "../../redux/makingTeamReducer";

 export  const GamePage=()=>{
    const [openWinnerBlock,setWinnerBlock]=useState(false)
    const [winner,setWinner]=useState('');
    const [total,setTotal]=useState(0)
    const teams=useSelector((state:AppstateType)=>state.teampage.teams)
    
    const arrayTe=useSelector((state:AppstateType)=>state.mode.arrayWithTeams)
    const objSet=useSelector((state:AppstateType)=>state.mode.objectOfsettings)
    const finalArray=useSelector((state:AppstateType)=>state.teampage.teams)
    const [round,setRound]=useState(1);
/// block of our team making
    const amountOfteam=arrayTe.length-1
    const [numberOfcurentTeam,setNumber]=useState(0)
    const [curentTeam,setCurentTeam]=useState('')
    
    useEffect(()=>{
        
        setCurentTeam(arrayTe[numberOfcurentTeam])
        const countofWords=Number(objSet?.countofWords)
        teams.forEach((element,index)=>{
            if ( curentTeam===arrayTe[arrayTe.length-1]&&element.counter>=countofWords){
                setWinner(element.name)
                setTotal(element.counter)
                setWinnerBlock(true)
            }
        })
       },[round])
    const incrementTeam=()=>{
        setNumber((prev)=>{
            if (prev===amountOfteam){
                return 0
            }
            return prev+1
        })
        
    }

    const [openGameBlock,setOpenGameBlock]=useState(false)
    
    const arrayofTeams=useMemo(()=>{
    return finalArray.map((elem,index)=>{
    return <div className={s.teamBlock}>
    <div>{elem.name}</div>
    <div>{elem.counter}</div>
</div>
})
   },[curentTeam])
     if (openWinnerBlock){
        return <WinnerBlock  winner={winner}  change={setWinnerBlock} total={total}/>
     }

    if (openGameBlock){
    return <TimerGame settings={objSet} curentTeam={curentTeam} setOpenGameBlock={setOpenGameBlock}
     incrementTeam={incrementTeam} setRound={setRound}/>
    }

return(
    <div>
        <div className={s.mainBlock}>Game
        <div className={s.logotwo} >Рейтинг команд</div>
        {arrayofTeams}
        </div>
        <div className={s.centerGameBlock}>
        <div className={s.roundand}>
        <div>Раунд {round} </div>
            </div>
          <div className={s.para}>к игре готовяться</div>
         <div className={s.curentTeam}>{curentTeam}</div>
        </div>
        <div className={s.btnforGame} onClick={()=>{setOpenGameBlock(true)}} >Поехали</div>
    </div>
)
}
type winner={
    change:(bool:boolean)=>void,
    winner:string,
    total:number

}
const WinnerBlock:React.FC<winner>=({change,winner,total})=>{
    const navigate=useNavigate()
    const ret=()=>{
        navigate('/')
    }
    const superClick=()=>{
        window.location.reload()
        ret()
    }
   const teams=useSelector((state:AppstateType)=>state.teampage.teams)
   const checkArray=teams.filter((element,index)=>{
    if (element.name != winner){
        return true
    }
   })
   const showing=checkArray.map((element,index)=>{
    return <div className={s.winerFlex}>
        <div className={s.otherNmae} >{element.name}</div>
        <div className={s.otherpoint}>{element.counter}</div>
        </div>
   })
        return (
        <div>
            <div className={s.picture}>
            <div className={s.winnerLogo}>
            <div className={s.winerPoints}>
                 point :{total}
            </div>
            <div className={s.mainWinner}> {winner} </div>
            <div className={s.logo}>Победитель</div>
            </div>
            <div>
               {showing}
            </div>
            </div>
            <button className={s.btnWinner} onClick={()=>{ret()}}>Меню</button>
        </div>
    )
}


type set={
    countofWords:string,
    time:string,
    dangerfor:string
}
type TymerGame={
    settings:set|null,
    curentTeam:string,
    setOpenGameBlock:(status:boolean)=>void,
    incrementTeam:()=>void,
    setRound:(prev:any)=>void
}


 export const TimerGame:React.FC<TymerGame>=React.memo(({settings,curentTeam,setOpenGameBlock,incrementTeam,setRound})=>{
    const dispatch=useDispatch()


    const numberSec=Number(settings?.time)
    const array=useSelector((state:AppstateType)=>state.mode.curentArray)

    const [onGameWORDS,setCountOfTrueWords]=useState(0)
    const[failwords,setfailWords]=useState(0); 
    const [openBlockWithWords,setWordsBlock]=useState(false)
    const [totalForanswersBlock,setTotalForAnswers]=useState(0)

    const [onTimer,setTimerSyayus]=useState(false)
    const [seconds,setseconds]=useState(numberSec)

    const interval=useRef(null)

    const [wordCount,setCountWord]=useState(0)

    const random=useCallback((arr:any)=>{
    const randomIndex=Math.floor(Math.random()* arr.length)
    const randomElem=arr[randomIndex]
    return randomElem
    },[wordCount])

    const randomWord=useMemo(()=>{
        return random(array)
    },[onGameWORDS,failwords])
    //const randomWord= random(array)


    useEffect(()=>{
         if(onTimer){
         //@ts-ignore
          interval.current=setInterval(()=>{ 
          setseconds((prev)=>{
           if (prev===0){
            //@ts-ignore
             
             return 0
           }
           return prev -1
          })
         },1000)}
        return()=>{
            //@ts-ignore
            clearInterval(interval.current)
            setseconds(numberSec)
        }
    },[onTimer])
 
const trueButtonClicker=(curentTeam:string,word:string)=>{
    setTotalForAnswers(prev=>prev+1)
    setCountOfTrueWords(prev=>prev+1)
    dispatch(actions.incrementCounter(curentTeam))
    dispatch(actions.addWords(word))
    if (seconds===0){
        setWordsBlock(true)
    }
}
const falseWordClicker=(curentTeam:string)=>{
    setTotalForAnswers(prev=>prev-1)
    //setCountWord(prev=>prev+1)
    setfailWords(prev=>prev+1)
    if (seconds===0){
        setWordsBlock(true)
    }
    if (settings?.dangerfor==='true'){
        console.log('here')
     dispatch(actions.deicrement(curentTeam))
    }
}
if (openBlockWithWords){
    return <Answeres curentteam={curentTeam} setOpenGameBlock={setOpenGameBlock}
     incrementTeam={incrementTeam} setRound={setRound} 
     totalForanswersBlock={totalForanswersBlock}
     />
}   
return (
    <div>
        <div className={s.logoBlock}>
            <div className={s.curTeam}>{curentTeam}</div>
            <div className={s.trueWords}>{onGameWORDS}</div>
            <p>Отгадано</p>
            </div>
       {!onTimer ? <div className={s.StartBlock}>
            <div className={s.start}  onClick={()=>{setTimerSyayus(true)}} >Начать</div>
        </div> :     
        <div className={s.StartBlock}>
            <div className={s.startOne}>{randomWord}</div>
            <div onClick={()=>trueButtonClicker(curentTeam,randomWord)} className={s.yesBtn}>YES</div>
            <div onClick={()=>{falseWordClicker(curentTeam)}}  className={s.noBtn}>NO</div>
        </div> 
        }
        <div className={s.loseBlock}>
        <div className={s.curTeam}>Пропуск</div>
            <div className={s.trueWords}>{failwords}</div>
            <p>{ seconds}</p>
        </div>
        <button onClick={()=>{setTimerSyayus(false) ;}  }>stop</button>
    </div>
)
})

type openBlock={
    curentteam:string,
    setOpenGameBlock:(status:boolean)=>void,
    incrementTeam:()=>void,
    setRound:(prebv:any)=>void,
    totalForanswersBlock:number
}
const Answeres:React.FC<openBlock>= React.memo(({curentteam,incrementTeam,setOpenGameBlock,setRound,totalForanswersBlock})=>{
    const arrayWords=useSelector((state:AppstateType)=>state.teampage.arrayWithWords)
    // const amount=arrayWords.length
    // const [counter,setCounter]=useState(amount)
    const dispatch=useDispatch()
    const outWords=()=>{
        incrementTeam()
        setRound((prev:any)=>prev+1)
        setOpenGameBlock(false)
        
        dispatch(actions.outWords())
        //setCounter(0)
    }
    const array=arrayWords.map((element,index)=>{
        return <div className={s.element}>{element}</div>
    })
    return (
        <div>
        <div className={s.bord}>
           <div className={s.logoAmount}>Набранные <br/> очки</div>
           <div className={s.flexinfo}>
           <div className={s.name}>{curentteam}</div>
           <div className={s.count}>{totalForanswersBlock}</div>
           </div>
        </div>
       <div className={s.overflow}>
         {array} 
        </div>
         <button  className={s.btnFor} onClick={()=>outWords()}>Next</button>
        </div>
    )
})

