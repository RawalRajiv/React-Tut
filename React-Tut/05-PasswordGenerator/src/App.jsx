import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function App() {

  const [passwordLengh, setPasswordLenght] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowSpecialCharacter, setAllowSpecialCharacter] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let result = ""
    let albhabates = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let specialCharacter = "!@#$%^&*()_-+=[]{};:,?><"

    if (allowNumber) {
      albhabates += numbers
    }

    if (allowSpecialCharacter) {
      albhabates += specialCharacter
    }

    for (let passwordcharacterindex = 1; passwordcharacterindex <= passwordLengh; passwordcharacterindex++) {
      let passwordcharacter = Math.floor((Math.random() * albhabates.length) + 1)
      result += albhabates.charAt(passwordcharacter)
    } //for loop

    setPassword(result)

  }, [passwordLengh, allowNumber, allowSpecialCharacter, setPassword]) //passwordGenerator

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  }, [password]) //copyPasswordToClipboard

  useEffect(() => {
    passwordGenerator()
  }, [passwordLengh, allowNumber, allowSpecialCharacter, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-1 my-8 text-orange-400 bg-gray-900">
        <h1 className="text-center text-4xl py-1"> Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden px-4 ">
          <input type="text" value={password} placeholder="Password" readOnly className="outline-none w-full py-1 px-3 rounded-l-md text-orange-600" ref={passwordRef}/>
          <button className="outline-none py-0.5 px-3 rounded-r-md bg-blue-700 text-white shrink-0" onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className="flex text-sm gap-x-2 px-4 py-8">
          <div className="flex items-center gap-x-1 min-w-52">

            <input type="range" min={8} max={50} value={passwordLengh} className="cursor-pointer" onChange={(e) => {setPasswordLenght(e.target.value)}}/>
            <label>Lenght: {passwordLengh}</label>

          </div>

          <div className="flex items-center gap-x-2 min-w-fit">            
            <input type="checkbox" defaultChecked={allowNumber} onChange={() => {setAllowNumber((prev) => !(prev))}}/>
            <label>Include Number</label>            
          </div>

          <div className="flex items-center gap-x-2 min-w-fit">
            <input type="checkbox" defaultChecked={allowSpecialCharacter} onChange={() => {setAllowSpecialCharacter((prev) => !(prev))}}/>
            <label>Include Special Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
