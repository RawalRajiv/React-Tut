import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import AddressCard from './AddressCard';

const ProfileCard = () => {
    
    const UserData = useContext(UserContext);
    
    if (!UserData) {
        return <h1>No User Found</h1>;
    }
    
    return (
        <>
            <h1>{`Welcome, ${UserData.name}`}</h1>
            <AddressCard />
        </>
    );
            
}

export default ProfileCard