import React, { useContext } from "react";
import UserContext from "../context/UserContext ";

const Component5 = () => {
    const user = useContext(UserContext);
    return(
        <>
            <h1>Component 5</h1>
            <h2>{`Welcome ${user}`}</h2>
        </>
    );

}

export default Component5