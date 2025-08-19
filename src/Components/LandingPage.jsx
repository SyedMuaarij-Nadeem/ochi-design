import { motion } from 'motion/react';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";



const LandingPage = () => {

    return (
        <div data-scroll data-scroll-speed="-.8" data-scroll-section className='relative w-full h-screen bg-zinc-900 text-white p-2 mb-20'>
            <div className="text-structure mt-28 px-12">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div key={index} className="relative masker">
                        {index === 1 && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "8rem" }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='w-32 h-20 inline-block rounded-xl mr-2.5 overflow-hidden'>
                                <img src="/ochi-sticker.png" alt="" />
                            </motion.div>
                        )}
                        <h1 className="inline text-9xl founders uppercase leading-[7.5vw] tracking-normal font-semibold">{item}</h1>
                    </div>
                })}
            </div>
            <div className='bg-red-500 absolute top-1/3 -translate-y-0.5 right-0 flex flex-col h-44 w-14 px-2 py-2 items-center'>
                <h3 className='font-bold block text-2xl ml-1'>W.</h3>
                <p className='rotate-[270deg] whitespace-nowrap text-sm font-semibold leading-none mt-14 '>Site of the day</p>
            </div>
            <div className='flex justify-between items-center w-full border-t-[1px] border-zinc-600 mt-24 pt-2.5 px-11'>
                {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index) => {
                    return <p key={index} className="text-md font-['Neue_Montreal'] tracking-wider font-light">{item}</p>
                })}
                <div className="start flex items-center gap-1 mt-0.5">
                    <div className='inline'>
                        <div className='text-sm font-light tracking-wider px-2.5 py-1 uppercase inline border-[2px] border-zinc-600 rounded-full'>Start the project</div>
                    </div>
                    <span className='flex w-7 h-7 border-[1.5px] border-zinc-600 rounded-full justify-center items-center'>
                        <GoArrowUpRight size="1em" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage