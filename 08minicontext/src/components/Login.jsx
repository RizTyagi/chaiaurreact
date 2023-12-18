import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { setUser } = useContext(UserContext)
    
    const hundelSubmit = (e) => {
            e.preventDefault()
            setUser({userName,password})
    }

    return (
        <div>
            <h3>User Login</h3>
            <input
                value={userName}
                onChange={(e) =>
                    setUserName(e.target.value)
                }
                type="text"
                placeholder="username" />

            <input
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                type="text"
                placeholder="password" />

            <button onClick={hundelSubmit}>Submit</button>
        </div>
    )
}

export default Login