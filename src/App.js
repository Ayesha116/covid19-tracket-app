
import React from 'react'
import './App.css'

import {ContextProvider} from './context/DataContext'
import covid from './components/images/covid.png' 
import {Cards} from './components/Cards' 
import {Chart} from './components/Chart'
import Countries from './components/Countries'


const App = () => {

    
  
  return (
    <ContextProvider>
      <div className = 'container'>
        <img alt = 'virus' src = {covid} width = '100px'/>
        <h2>Covid Tracker APP</h2>
        <Cards></Cards>
        <Countries></Countries>
        <Chart></Chart>
      </div>
    </ContextProvider>
    
  )
}

export default App;
