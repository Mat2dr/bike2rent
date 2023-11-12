'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiForestCamp,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { BiSolidBolt } from 'react-icons/bi';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Electric',
    icon: BiSolidBolt,
    description: 'Biking with some help !',
  },
  {
    label: 'City',
    icon: MdOutlineVilla,
    description: 'For the city!'
  },
  {
    label: 'Mountain',
    icon: TbMountain,
    description: 'The best bikes to go to the montain!'
  },
  {
    label: 'Road',
    icon: GiForestCamp,
    description: 'This bike offers forest activities!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;