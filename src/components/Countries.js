import React, {useContext} from 'react'
import {DataContext} from '../context/DataContext';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Countries() {  
    const classes = useStyles();
    const {data , setselectedCountry} = useContext(DataContext)
    console.log(data)
    const handleCountryChange = (e) => {
        console.log('aa')
        setselectedCountry(e)
        const confirmed = data.Countries[e-1].TotalConfirmed
        const recovered = data.Countries[e-1].TotalRecovered
        const deaths = data.Countries[e-1].TotalDeaths
        console.log(confirmed)
        console.log(recovered)
        console.log(deaths)
      }
    
    

    

  if(!data){
    return(<div>loading...</div>)
    }
  return (
    <div>
        <FormControl className={classes.formControl}>
        <br/>
        <NativeSelect
        onChange={(e) => handleCountryChange(e.target.options.selectedIndex)}
        >
          <option value={10}>Global Data</option>
          {data.Countries.map( ( {Country} ,i) => {return <option key= {i} >{Country}</option>})}
        
          </NativeSelect>
      </FormControl>
      
      </div>
  )}