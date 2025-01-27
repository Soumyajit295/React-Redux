import { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvide = ({children})=>{
    const [user,setUser] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvide