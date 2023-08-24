import {sales} from '@/data'

export function ReportTable ({response,handleDelete}){
let sum_ = 0
sales.map((x)=> sum_+= x)
    return(
        <div className='flex justify-center mt-20 rounded'>
        {

            response ? (
            <table className='rounded '>
                
                <tr className='border-black bg-lime-600'>
                    
                    <th class="px-3 py-3">Location</th>
                    <th class="px-3 py-3">6am</th>
                    <th class="px-3 py-3">7am</th>
                    <th class="px-3 py-3">8am</th>
                    <th class="px-3 py-3">9am</th>
                    <th class="px-3 py-3">10am</th>
                    <th class="px-3 py-3">11am</th>
                    <th class="px-3 py-3">12am</th>
                    <th class="px-3 py-3">1pm</th>
                    <th class="px-3 py-3">2pm</th>
                    <th class="px-3 py-3">3pm</th>
                    <th class="px-3 py-3">4pm</th>
                    <th class="px-3 py-3">5pm</th>
                    <th class="px-3 py-3">6pm</th>
                    <th class="px-3 py-3">7pm</th>
                    <th class="px-3 py-3">Total</th>    
                        
                    </tr>
                    
                
                
                {response.map((x)=>
                <tr className='text-center border bg-lime-400'>{x.location}<span onClick={()=>handleDelete(x.id)}>[x]</span>
                {sales.map((x)=>
                <td className='border'>{x}</td>
                )}
                <td className='text-center border'>{sum_}</td>
                </tr>)}
                
                
                <tr className='text-center border bg-lime-600'>
                    Total
                    {sales.map(x=>(
                        <td className='text-center border'>{x*response.length}</td>

                    ))}
                    <th>{516*response.length}</th>   

                </tr>

                
                

            </table>)
            : "No Cookies Stands Available"}
            </div>
            )
}