import React, { useState } from 'react'
import UserContext from './UserContext'

// function UserContextProvider({childern}) {
//     const [user, setUser] = useState(null)

//   return (
//     <UserContext.Provider value={{user, setUser}}>
//         {childern}
//     </UserContext.Provider>
//   )
// }

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
