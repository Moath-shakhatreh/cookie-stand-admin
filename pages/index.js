import Head from "next/head"
import { useState } from "react"
import CreateForm from '@/components/form'
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ReportTable } from "@/components/table"
import { useAuth } from "@/context/auth"
import useResource from "@/hooks/useResource"


export default function Home(){
  const [data,setData] = useState([])
  const [userInf,setUserInfo] = useState([])
  const [loc, setloc ] = useState('no answer yet ')
  
  // const [max, setmax ] = useState('no answer yet ')
  // const [min, setmin ] = useState('no answer yet ')
  // const [avg, setavg ] = useState('no answer yet ')
  
  const {login,user,logout} = useAuth()
  
  const {response,createResource,deleteResource} = useResource()
  
  function handleSubmit(e){
    e.preventDefault()
    const newLocation={
      location :e.target.loc.value,
      minimum_customers_per_hour : e.target.min.value,
      maximum_customers_per_hour:e.target.max.value,
      average_cookies_per_sale:e.target.avg.value
    }
    
    createResource(newLocation)
  }
  


  
  // function submitHandler(event){
  //   event.preventDefault()
  //   let loc = event.target.loc.value
  //   setData([...data,loc])
  //   setloc(event.target.loc.value)
    
  //   // setmax(event.target.max.value)
  //   // setmin(event.target.min.value)
  //   // setavg(event.target.avg.value)
  // //  console.log(question)}
  // }

  async function loginHandler(event){
    event.preventDefault()
    let userName =event.target.userName.value
    let password =event.target.password.value
    setUserInfo([userName,password])
    console.log(userInf)
  }
  


  
  return(<>
  
    <Head><title>Cookie Stand Admin</title></Head>
    
    {user ? <>
    
      <div className="flex flex-col min-h-screen">
    
    <Header userName={user.username} logOut={logout}/> 
      <main>

      <CreateForm handleSubmit={handleSubmit}/>
      
      <ReportTable  response={response} handleDelete={deleteResource}/>
      
      {/* <CookiesList response={response} /> */}
      
      </main>
      <Footer response={response} />
      </div>
    
    </>
    
    :
    
    <form className="flex-col w-1/2 mx-auto my-20 border rounded border-lime-500 bg-lime-200" onSubmit={loginHandler}>
      <div className="flex-col m-5 text-center">
      <label className="font-bold">USER NAME</label><input className="w-full h-8 m-2 border rounded border-lime-600" name="userName" placeholder="Username"/>
      </div>
      
      <div className="flex-col m-5 text-center">
      <label className="font-bold">PASSWORD</label><input className="w-full h-8 m-2 border rounded border-lime-600" name="password" placeholder="Password"/>
      </div>
      
      <div className="flex-col m-5 mx-auto text-center w-100">
      <button className="w-3/4 p-2 rounded bg-lime-400" onClick={()=>login(userInf[0],userInf[1])}>SIGN IN</button>
      </div>
      
    </form>

    }


    
      
    </>
    )  
      }


// function CookiesList({response}){
//   {response && console.log(response)}
//   return (
//     <>
//     {response && response.map(item=>{
//       return(
//         <>
//         <span><li key={item.id}> {item.location}</li></span>
//         </>
//       )
//     })}
    
//     </>
//   )
// }





