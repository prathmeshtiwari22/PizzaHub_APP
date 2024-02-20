import {React,createContext} from 'react';
import { useState } from 'react';

const CItems = createContext();

const BasketContext = ({children})=> {
    const [cart,setCart]=useState([]);
    return(
        <CItems.Provider value={{cart,setCart}}>
            {children}
        </CItems.Provider>
    )
}
 
export {CItems,BasketContext}