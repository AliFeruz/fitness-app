import { ClassType } from '@/shared/types';

type Props = {
  item: ClassType;
}

const Class = ({item}: Props) => {

  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
      <div className='overlaystyles'>
        <p className='text-2xl'>{item.name}</p>
        <p className='mt-5'>{item.description}</p>
      </div>
      <img src={item.image} alt="image" />
    </li>
  )
}

export default Class;