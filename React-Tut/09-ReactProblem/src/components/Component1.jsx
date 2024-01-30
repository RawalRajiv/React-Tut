import React, { useState } from "react";

import Component2 from "./Component2";
import UserContext from "../context/UserContext ";

const Component1 = () => {
    const [user, SetUser] = useState("Rajiv Rawal");

    return (
        <UserContext.Provider value={user}>
            <h1>Hello</h1>
            <Component2 />
        </UserContext.Provider>
    );

}

export default Component1