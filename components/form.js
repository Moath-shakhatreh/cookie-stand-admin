export default function CreateForm(props){
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