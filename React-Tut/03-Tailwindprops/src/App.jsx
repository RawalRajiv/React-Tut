
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className='bg-yellow-200 text-red-600 rounded-md p-3 mb-4'>Third React Page with Tailwind</h1>
      
      <Card username="Rajiv" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?" btnText="Click Me" imgAltText="AirMax Pro" 
                    imgSource="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
      <Card username="Rawal" 
        imgSource="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"/>

    </>
  )
}

export default App
