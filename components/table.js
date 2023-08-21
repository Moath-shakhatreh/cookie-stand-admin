import {sales} from '@/data'

export function ReportTable (props){
let sum_ = 0
sales.map((x)=> sum_+= x)
    return(
        <div className='flex justify-center my-5'>
        {

            props.data[0] ? (
            <table class='table-fixed '>
                
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
                    
                
                
                {props.data.map((x)=>
                <tr className='border bg-lime-400'>{x}
                {sales.map((x)=>
                <td className='border'>{x}</td>
                )}
                <td className='border'>{sum_}</td>
                </tr>)}
                
                
                <tr className='border bg-lime-600'>
                    Total
                    {sales.map(x=>(
                        <td className='border'>{x*props.data.length}</td>

                    ))}
                    <th>{516*props.data.length}</th>   

                </tr>

                
                

            </table>)
            : "No Cookies Stands Available"}
            </div>
            )
}