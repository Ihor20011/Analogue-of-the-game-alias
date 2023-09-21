//@ts-ignore
import React from 'react';
import { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainBlock } from './components/GameAliasComponent/MainPageAplication';
import { Rules } from './components/GameAliasComponent/Rules';
import { MakingTeam } from './components/GameAliasComponent/MakeTeam';
import { Settings } from './components/GameAliasComponent/Settings';
import { Mode } from './components/GameAliasComponent/Mode';
import { GamePage, TimerGame } from './components/GameAliasComponent/GamePage';
class AppC extends React.Component{
  render(){
    return(
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
       <div className='app-wrapper'>
        <div className='game'>
          <Suspense fallback={<div>loading</div>}>
            <Routes>
             <Route path='/' element={<MainBlock/>}/>
             <Route path='/Rules' element={<Rules/>} />
             <Route path='/new' element={<MakingTeam/>} />
             <Route path='/Setings' element={<Settings/>} />
             <Route path='/Mode'  element={<Mode/>} />
             <Route path='/GamePage' element={<GamePage/>}/>
            </Routes> 
          </Suspense>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}     
export default AppC ;
