import { createContext, useContext,useState} from "react";
import jwt from 'jsonwebtoken';
const AuthContext= createContext()


export function useAuth(){
    const auth = useContext(AuthContext)
    if (!auth){
        return("Error : Empty Auth ")

    }
    return auth // {token, user, login}
}

// const baseUrl = process.env.NEXT_PUBLIC_URL

export function AuthProvider(props){

    const [state, setState] = useState({
        token : null,
        user : null,
        login,
        logout
    })

    const baseUrl = process.env.NEXT_PUBLIC_URL

    async function login(username,password){
        //const response = axios.post(url, {username,password})
        const url =baseUrl+"/api/token/"
        const options={
                method : "POST",
                body : JSON.stringify({username,password}),
                headers :{"Content-Type": "application/json"}

        }
        const response = await fetch(url,options )
        const data = await response.json()
        
        
        const decodedToken = jwt.decode(data.access)
        console.log(decodedToken)
        const newState = {
            token : data,
            user : decodedToken ? {
                username :decodedToken.username ,
                email : decodedToken.email ,
                id : decodedToken.user_id, 
            } : ""
        }
        setState(prevState=> ({...prevState,... newState}));
    }
        

    function logout(){
        const newState={
            token : null, 
            user : null
        }
        setState(prevState=> ({...prevState,... newState}));

    }


    return(
        <AuthContext.Provider value={state}>
            {props.children}

        </AuthContext.Provider>
    )

}