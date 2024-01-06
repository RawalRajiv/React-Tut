import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {

    const [CurrencyData, setCurrencyData]  = useState({})

    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`)
        .then((apiResponse) => apiResponse.json())
        .then((apiResponseData) => setCurrencyData(apiResponseData[fromCurrency]))
        
    }, [fromCurrency]) //useEffect
    //console.log(CurrencyData);
    return CurrencyData;
}

export default useCurrencyInfo;