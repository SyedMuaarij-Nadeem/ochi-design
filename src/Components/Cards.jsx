import React from 'react'

const Cards = () => {
    return (
        <div data-scroll data-scroll-speed="-.25" className='bg-zinc-900 w-full h-screen py-10 font-[Neue_Montreal]'>
            <div className='Cards w-full h-[60vh] flex px-10 gap-4'>
                <div className='w-1/2 h-full rounded-xl bg-[#004D43] flex relative items-center justify-center'>
                    <button className='rounded-full px-2.5 py-1 border-[#CDEA68] border-[1.5px] text-[#CDEA68] absolute bottom-7 left-7 text-sm uppercase'>&copy;2019-2025</button>
                    <img src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>
                <div className='w-1/2 h-full flex gap-4'>
                    <div className='w-1/2 h-full rounded-xl bg-zinc-700 flex relative items-center justify-center'>
                        <button className='rounded-full px-2.5 py-1 border-zinc-200 border-[1.5px] text-zinc-200 absolute bottom-7 left-7 text-sm uppercase'>rating 5.0 on clutch</button>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    </div>
                    <div className='w-1/2 h-full rounded-xl bg-zinc-700 flex relative items-center justify-center'>
                        <button className='rounded-full px-2.5 py-1 border-zinc-200 border-[1.5px] text-zinc-200 absolute bottom-7 left-7 text-sm uppercase'>business</button>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='rounded-full h-28 w-28' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards