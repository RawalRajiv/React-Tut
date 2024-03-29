import React from 'react'
import { useId } from 'react';

function InputBox(
    {
        label
        , amount
        , currencyOptions = []
        , selectedCurrency = "sgd"
        , onTextChange 
        , onCurrencyChange
        , amountDisable = false
        , currencyDisable = false
        , className = ""
    }
) {

    const amountId = useId();
    const ccyId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onTextChange && onTextChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">{label} Currency</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                    id={ccyId}
                >
                    {
                        currencyOptions.map((ccy) => (
                            
                        <option key={ccy} value={ccy}>
                            {ccy}
                        </option>
                        )) // map
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox