// Phase - 1 : custom hooks
import { useEffect, useState } from "react";


function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v1/latest?base=${currency.toUpperCase()}`)
        .then((response) => response.json())
        .then((response) => setData(response.rates))
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;