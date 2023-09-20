'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

  return (
    <div className='hidden md:block cursor-pointer'>BikeToRent</div>
  )
}

export default Logo;