
import { useState } from 'react'


function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='max-w-full h-screen' style={{backgroundColor: color}}>
        <div className='absolute top-4 bottom-4 right-4 w-20 justify-center'>          
          <div className='absolute flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-2xl text-cente px-2 py-2 right-8 top-14 '>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'red'}} onClick={()=> setColor('red')}>Red</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'green'}} onClick={()=> setColor('green')}>Green</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'blue'}} onClick={()=> setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'yellow'}} onClick={()=> setColor('yellow')}>Yellow</button>

            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'olive'}} onClick={()=> setColor('olive')}>Olive</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'gray'}} onClick={()=> setColor('gray')}>Gray</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'pink'}} onClick={()=> setColor('pink')}>Pink</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'purple'}} onClick={()=> setColor('purple')}>Purple</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-30 text-slate-950 shadow-2xl' style={{backgroundColor: 'lavender'}} onClick={()=> setColor('lavender')}>Lavender</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-slate-950 shadow-2xl' style={{backgroundColor: 'white'}} onClick={()=> setColor('white')}>White</button>
            <button className='outline-none px-4 py-4 rounded-2xl w-20 text-white shadow-2xl' style={{backgroundColor: 'black'}} onClick={()=> setColor('black')}>Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
