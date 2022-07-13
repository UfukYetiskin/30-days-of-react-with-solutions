import { createContext, useState } from "react";


const UserContext = createContext()
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const values = {user, setUser}
    return(
        <div>
            <UserContext.Provider value={values}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
export default UserContext