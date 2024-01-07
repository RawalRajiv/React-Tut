import React, { useEffect, useState } from 'react'
//import { gitInfoLoader } from '../../APIData/gitInfoLoader'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [gitData, setGitData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/rawalrajiv')
  //     .then((gitAPIResponse) => gitAPIResponse.json())
  //     .then((gitAPIData) => {
  //       console.log(gitAPIData)
  //       setGitData(gitAPIData)
  //     } )
  // }, [])

  const gitData = useLoaderData()

  return (
    <div className='text-center text-white m-4 p-4 bg-gray-400 text-3xl'>Github follower:{gitData.followers}
      <img src={gitData.avatar_url} alt='git Picture' width={300}/>
    </div>
  )
}

export default Github