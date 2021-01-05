import React , {useContext} from 'react';
import {DataContext} from '../context/DataContext';


export const Chart = () => {
    const {data, selectedCountry} = useContext(DataContext)
    console.log(selectedCountry )
    if(!data){
        return(<div>loading...</div>)
    }
    return (
        <div>
            {selectedCountry}
        </div>
    )
}
