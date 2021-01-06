import React, {useEffect, createContext , useState} from 'react';

export const DataContext  = createContext({})

export const ContextProvider = ({children}) => {
    const [data, setglobaldata] = useState();
    const [selectedCountryIndex, setselectedCountryIndex] = useState(0);
    useEffect(() => {
        async function Fetchdata(){
            const response = await fetch('https://api.covid19api.com/summary')
            const datajson = await response.json()
            setglobaldata(datajson)
        }
        Fetchdata();
        
    }, [])
    return(<DataContext.Provider value = {{
        data , 
        selectedCountryIndex,
        setselectedCountryIndex
    }
     

    
        }>
        {children}
    </DataContext.Provider>)

}