import React, { useState } from 'react';
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv, HiCalendar, HiPaperAirplane, HiPencil } from "react-icons/hi2";
import { HiPlus, HiDownload, HiMenu } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'COMMITTEE',
            icon: HiPencil
        },
        {
            name: 'PAPERS',
            icon: HiPaperAirplane
        },
        {
            name: 'SCHEDULE',
            icon: HiPlayCircle
        },
        {
            name: 'REGISTRATION',
            icon: HiTv
        },
        {
            name: 'TRAVEL',
            icon: HiCalendar
        },
        {
            name: 'DOWNLOADS',
            icon: HiDownload
        },
        {
            name: 'KEYNOTE',
            icon: HiPlus
        }

    ]
    return (
        <div className='flex items-center justify-center p-5 bg-white sticky top-0 z-10'>
            <div className='flex gap-8'>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} textSize='text-lg' iconSize='24' />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} textSize='text-lg' iconSize='24' />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiMenu} textSize='text-lg' iconSize='24' />
                        {toggle ? <div className='absolute mt-3 bg-[#eaeaea] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon} textSize='text-lg' iconSize='24' />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
