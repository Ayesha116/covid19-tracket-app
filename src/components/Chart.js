
import React , {useContext} from 'react';
import {Bar } from 'react-chartjs-2';
import {DataContext} from '../context/DataContext';
import '../App.css'

export const Chart = () => {
    let confirmed = 0
    let recovered = 0
    let deaths = 50
    const {data, selectedCountryIndex} = useContext(DataContext)
    if(data){
        console.log(selectedCountryIndex)
        if(selectedCountryIndex===0){
            confirmed = data.Global.TotalConfirmed
            recovered = data.Global.TotalRecovered
            deaths = data.Global.TotalDeaths
            }
        else {
            confirmed = data.Countries[selectedCountryIndex-1].TotalConfirmed
            recovered = data.Countries[selectedCountryIndex-1].TotalRecovered
            deaths = data.Countries[selectedCountryIndex-1].TotalDeaths
            console.log(deaths)
            console.log(selectedCountryIndex)
            }
            
        console.log(deaths)

    }
    
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor : ['rgba(211, 84, 0, 0.8)','rgba(0,128,0,0.7)' , 'rgba(255,0,0, 0.8)' ],
              opacity: 0.5,
              data: [confirmed , recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
    ) : null
  );


  return (
    <div className = 'chart'>{barChart}</div>
  );
  }