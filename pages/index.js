import Head from "next/head"
import { useState } from "react"
import CreateForm from '@/components/form'
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ReportTable } from "@/components/table"


export default function CookieStandAdmin(){
  const [data,setData] = useState([])
  const [loc, setloc ] = useState('no answer yet ')
  const [max, setmax ] = useState('no answer yet ')
  const [min, setmin ] = useState('no answer yet ')
  const [avg, setavg ] = useState('no answer yet ')
  
  function submitHandler(event){
    event.preventDefault()
    let loc = event.target.loc.value
    setData([...data,loc])
    
   
    setloc(event.target.loc.value)
    setmax(event.target.max.value)
    setmin(event.target.min.value)
    setavg(event.target.avg.value)
  //  console.log(question)}
  }
  


  
  return(<>
  
    <Head><title>Cookie Stand Admin</title></Head>
    <div className="flex flex-col min-h-screen">
    <Header/> 
      <main>
      <CreateForm handler={submitHandler}/>
      
      <ReportTable data={data} />

      
      {/* <div className="flex flex-col justify-around p-5 mx-48 my-6 bg-lime-500">

        
        <p>Location: {loc}</p>
        <p>Max: {max}</p>
        <p>Min: {min}</p>
        <p>Avg: {avg}</p>
      </div> */}
      
      </main>
      <Footer data={data} />
      </div>
      
    </>
    )  
      }






