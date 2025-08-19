import { motion } from 'motion/react'
import { span } from 'motion/react-client'
import React, { useState } from 'react'

const Featured = () => {
    const [isHovering1, setIsHovering1] = useState(false)
    const [isHovering2, setIsHovering2] = useState(false)


    return (

        <div data-scroll data-scroll-speed="-.25" data-scroll-section className='bg-zinc-900 w-full mb-8 text-white font-[Neue_Montreal] pt-20 py-10 rounded-t-3xl'>
            <h1 className='text-[4vw] pl-7 pb-10'>Featured projects</h1>
            <div className='border-t-[1.5px] border-zinc-600 pt-10 px-7'>
                <div className='relative'>
                    <div className='Cards  flex items-center gap-5'>
                        <div className='w-1/2'>
                            <div className='flex justify-start gap-4 items-center'>
                                <div className='w-2.5 h-2.5 bg-zinc-200 rounded-full'></div>
                                <div className='uppercase text-sm font-light tracking-wider'>salience labs</div>
                            </div>
                            <img
                                onMouseEnter={() => setIsHovering1(true)}
                                onMouseLeave={() => setIsHovering1(false)}
                                src="/salience-labs.png" alt='' className='w-full h-[85vh] rounded-xl my-4' />
                            <div className='flex items-center justify-start gap-3'>
                                <div className='text-sm font-light tracking-wider px-2.5 py-1 uppercase inline border-[1.5px] border-zinc-600 rounded-full'>brand identity</div>
                                <div className='text-sm font-light tracking-wider px-2.5 py-1 uppercase inline border-[1.5px] border-zinc-600 rounded-full'>pitch desk</div>

                            </div>

                        </div>
                        <h1 className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 uppercase founders text-[#CDEA68] z-[9] text-8xl flex overflow-hidden'>
                            {"Salience-labs".split('').map(
                                (item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: .03 * index }}
                                        className='inline-block'
                                    >
                                        {item}
                                    </motion.span>)
                            )}
                        </h1>
                        <h1 className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 uppercase founders text-[#CDEA68] z-[8] text-8xl leading-none tracking-tight flex overflow-hidden'>

                            {"Medallia-Experience".split('').map(
                                (item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: .03 * index }}
                                        className='inline-block'
                                    >
                                        {item}
                                    </motion.span>)
                            )}

                        </h1>

                        <div className='w-1/2'>
                            <div className='flex justify-start gap-4 items-center'>
                                <div className='w-2.5 h-2.5 bg-zinc-200 rounded-full'></div>
                                <div className='uppercase text-sm font-light tracking-wider'>Medallia Experience</div>
                            </div>
                            <img
                                onMouseEnter={() => setIsHovering2(true)}
                                onMouseLeave={() => setIsHovering2(false)}

                                src="/medallia.png" alt='' className='w-full h-[85vh] rounded-xl my-4' />
                            <div className='flex items-center justify-start gap-3'>
                                <div className='text-sm font-light tracking-wider px-2.5 py-1 uppercase inline border-[1.5px] border-zinc-600 rounded-full'>conference</div>
                                <div className='text-sm font-light tracking-wider px-2.5 py-1 uppercase inline border-[1.5px] border-zinc-600 rounded-full'>executive keynote</div>
                                <div className='text-sm font-light tracking-wider px-2.5 py-1 uppercase inline border-[1.5px] border-zinc-600 rounded-full'>product launch</div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured