import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const koinx_url = "https://www.koinx.com/";
const koinx_logo = '/koinx.svg';

export default function Navbar() {

    return(
        <nav className="flex w-full justify-between bg-white from-zinc-200 px-6 md:px-12 shadow">
            <Link href={koinx_url} target='_blank'>
                <Image className='w-20 hover:opacity-90' src={koinx_logo} alt="KoinX" width={100} height={100} priority />
            </Link>

            {/* mobile */}
            <div className='select-none block md:hidden my-auto'><Menu size={26} /></div>

            {/* web */}
            <div className='font-semibold text-sm md:block hidden md:flex items-center justify-center space-x-8'>
                <Link href="/crypto-taxes" target='_blank'>
                    <div className='hover:text-gray-600'>Crypto Taxes</div>
                </Link>
                <Link href="/free-tools" target='_blank'>
                    <div className='hover:text-gray-600'>Free Tools</div>
                </Link>
                <Link href="/resource-center" target='_blank'>
                    <div className='hover:text-gray-600'>Resource Center</div>
                </Link>
                <button className='px-5 py-[6px] font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500'>Get Started</button>
            </div>
        </nav>
    )

}