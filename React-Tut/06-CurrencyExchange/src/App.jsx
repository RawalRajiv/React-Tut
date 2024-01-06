import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [fromAmount, setFromAmount] = useState(0)
  const [fromCCY, setFromCCY] = useState("sgd")
  const [toAmount, setToAmount] = useState(0)
  const [toCCY, setToCCY] = useState("inr") 

  const currencyData = useCurrencyInfo(fromCCY)

  const ccyOptions = Object.keys(currencyData)

  const swap = () => {
   setFromAmount(toAmount)
   setToAmount(fromAmount)
   setFromCCY(toCCY)
   setToCCY(fromCCY)  
  }

  const computeExchangeAmount = () => {
    setToAmount(fromAmount*currencyData[toCCY])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://www.pexels.com/photo/gold-bitcoin-coin-on-background-of-growth-chart-7788009/')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        computeExchangeAmount();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={fromAmount}
                            currencyOptions={ccyOptions}
                            selectedCurrency={fromCCY}
                            onCurrencyChange={(currency) => setFromAmount(fromAmount)}
                            onTextChange={(fromAmount) => setFromAmount(fromAmount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={toAmount}
                            currencyOptions={ccyOptions}
                            selectedCurrency={toCCY}
                            onCurrencyChange={(currency) => setToAmount(currency)}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromCCY.toUpperCase()} to {toCCY.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
