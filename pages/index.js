import Head from "next/head"
import { useState } from "react"


export default function Home(){
  const [loc, setloc ] = useState('no answer yet ')
  const [max, setmax ] = useState('no answer yet ')
  const [min, setmin ] = useState('no answer yet ')
  const [avg, setavg ] = useState('no answer yet ')
  
  function submitHandler(event){
    event.preventDefault()
    // alert (event.target.question.value)
    setloc(event.target.loc.value)
    setmax(event.target.max.value)
    setmin(event.target.min.value)
    setavg(event.target.avg.value)
  //  console.log(question)}
  }


  
  return(<>
    <head><title>Cookie Stand Admin</title></head>
    <body className="flex flex-col min-h-screen">
    <Header/> 
      <main>
      <Form handler={submitHandler}/>
      
      <div className="flex flex-col justify-around p-5 mx-48 my-6 bg-lime-500">
        <p>Location: {loc}</p>
        <p>Max: {max}</p>
        <p>Min: {min}</p>
        <p>Avg: {avg}</p>
      </div>
      
      </main>
      <footer className="p-4 mt-auto bg-lime-500">&copy; ASAC 2023</footer>
    </body>
  </>
)  
  }


function Header(){
  return(
    <header>
      <h1 className='flex items-center justify-between p-4 mb-5 text-xl bg-lime-500'>Cookie Stand Admin</h1> 
      </header>
  )
}

function Form(props){
  return(
    <form className="p-4 ml-48 mr-48 bg-lime-500 " onSubmit={props.handler}>
        
        <h1 className="flex justify-center m-6 text-4xl bg-lime-500">Create Cookie Stand</h1>
        
        <div className="flex justify-around m-6"><label className="text-lg">Location</label><input name="loc" className="justify-between w-5/6 " /></div>
          <div className="flex justify-around text-xl m-14">
          <div className="flex flex-col justify-around bg-lime-500"><label>Minimum customers per Hours</label><input name="max"/></div>
          <div className="flex flex-col justify-around bg-lime-500"><label>Maximum Coustomers per Hours</label><input name="min"/></div>
          <div className="flex flex-col justify-around bg-lime-500"><label>Avarage Coustomers per Hours</label><input name="avg"/></div>
          <button className="p-5 bg-lime-600">Create</button>
        </div>

    </form>
  )
}



