import { useState, useEffect } from 'react';

import JsonData from './data/data.json'
import MainContext from './Context';


const Provider = () => {
    
    const [pageData, setPageData] = useState({});

    useEffect(()=>{
        setPageData(JsonData)
    }, [])

    return(
        <MainContext.Provider value={{data : pageData}}>
            {props.children}
        </MainContext.Provider>
    )


}