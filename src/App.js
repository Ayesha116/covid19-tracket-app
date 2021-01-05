
import React, {useContext} from 'react'
import './App.css'

import {ContextProvider} from './context/DataContext'
import covid from './components/images/covid.png' 
import {Cards} from './components/Cards' 
import {Chart} from './components/Chart'
import Countries from './components/Countries'
import {DataContext} from './context/DataContext'


const App = () => {
  // const data = useContext(DataContext)

    
  
  return (
    <ContextProvider>
      <div className = 'container'>
      <h2>Covid Tracker APP</h2> <span><img alt = 'virus' src = {covid} width = '100px'/></span>
      <Cards></Cards>
      <Countries></Countries>
      <Chart></Chart>
      </div>
    </ContextProvider>
    
  )
}

export default App;
