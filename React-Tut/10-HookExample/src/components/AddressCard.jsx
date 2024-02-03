import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const AddressCard = () => {
    
    const userAddress = useContext(UserContext);
  
    return (
    <>
        <div>
            <h1>Address Information</h1>
            <h2>{`Street: ${userAddress.address.street}`}</h2>
            <h2>{`Suite: ${userAddress.address.suite}`}</h2>
            <h2>{`City: ${userAddress.address.city}`}</h2>
            <h2>{`Zipcode: ${userAddress.address.zipcode}`}</h2>
        </div>
    </>
  )
}

export default AddressCard