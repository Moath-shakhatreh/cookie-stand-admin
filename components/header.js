
import Link from 'next/link';
export default function Header({userName,logOut}){
    return(
        <header className='flex justify-between p-5 mb-5 bg-lime-500'>
            <h1 className='flex items-center justify-between text-xl bg-lime-500'>Cookie Stand Admin</h1> 
            <div className='flex justify-between w-1/6'>
                <p className='p-2 rounded bg-slate-300'>{userName}</p>
                <button onClick={logOut} className='p-2 rounded bg-lime-600' >Sign Out</button>
                <Link className='p-2 border-black rounded bg-slate-300' href={"/asset/overview"}>Overview</Link>
            </div>
        </header>
    )
  }