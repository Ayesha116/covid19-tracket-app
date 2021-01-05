import React, {useEffect , useState} from 'react';

export const DataContext  = React.createContext({})

export const ContextProvider = ({children}) => {
    const [data, setglobaldata] = useState();
    const [selectedCountry, setselectedCountry] = useState();
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
        selectedCountry,
        setselectedCountry
    }
     

    
        }>
        {children}
    </DataContext.Provider>)

}