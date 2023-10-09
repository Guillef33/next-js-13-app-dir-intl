import {useAppSelector} from '@/redux/hooks';
import Image from 'next/image';
import {MouseEventHandler} from 'react';

interface IPrimary {
  label: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

function Primary({label, handleClick}: IPrimary) {
  const {loading} = useAppSelector((state) => state.info);
  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-gradient-to-r from-secondary-color to-[#f5c664] text-black font-bold shadow-md hover:shadow-lg rounded-[4px] text-[0.9rem] xl:text-[1.2rem] px-[22px] py-[12px] focus:ring-4 focus:outline-none focus:ring-[#F2B434]/50 dark:focus:ring-[#F2B434]/55 transform       transition duration-300 active:scale-95 disabled:opacity-50"
      disabled={loading}
    >
      {label}
      <Image
        src="/images/arrowBlackRight.svg"
        alt="arrow"
        width={10}
        height={10}
        className="ml-2"
      />
    </button>
  );
}

export default Primary;
