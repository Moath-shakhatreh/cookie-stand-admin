import Link from 'next/link';
export default function Header(){
    return(
        <header className='flex justify-between p-5 mb-5 bg-lime-500'>
            <h1 className='flex items-center justify-between text-xl bg-lime-500'>Cookie Stand Admin</h1> 
            <Link className='p-2 bg-white border-black' href={"/asset/overview"}>Overview</Link>
        </header>
    )
  }