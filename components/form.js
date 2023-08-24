export default function CreateForm({ handleSubmit }) {



  return (
    <form className="w-3/4 p-4 mx-auto rounded bg-lime-500" onSubmit={handleSubmit}>

      {/* <h1 className="flex justify-center m-6 text-4xl bg-lime-500">Create Cookie Stand</h1> */}
      <div className="flex p-5 m-5 mx-auto justify-evenly">
        <div className="flex-col justify-around w-3/4 text-center"><label className="text-lg">ADD LOCATION</label><input name="loc" className="justify-between w-11/12" /></div>
        <button className="w-1/4 p-2 rounded bg-lime-600">Create Stand</button>
      </div>
      <div className="flex justify-around w-11/12 p-5 mx-auto">
        <div className="flex flex-col justify-around w-1/4 text-center bg-lime-500"><label>Minimum customers per Hours</label><input name="max" /></div>
        <div className="flex flex-col justify-around w-1/4 text-center bg-lime-500"><label>Maximum Coustomers per Hours</label><input name="min" /></div>
        <div className="flex flex-col justify-around w-1/4 text-center bg-lime-500"><label>Avarage Coustomers per Hours</label><input name="avg" /></div>
        
      </div>

    </form>
  )
}