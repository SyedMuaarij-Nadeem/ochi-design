import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
    return (
        <div data-scroll data-scroll-speed="-.08" data-scroll-section className='w-full py-10 text-white bg-[#004D43] rounded-t-3xl'>
            <div className='border-t-[1.5px] border-b-[1.5px] border-[#4D837C] flex overflow-hidden whitespace-nowrap mt-14'>

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
                    className="flex"
                >
                    <h1 className='text-[28vw] founders leading-48 font-semibold uppercase mt-2 mb-12 mr-10'>
                        We Are Ochi
                    </h1>
                    <h1 className='text-[28vw] founders leading-48 font-semibold uppercase mt-2 mb-12 mr-10'>
                        We Are Ochi
                    </h1>
                    <h1 className='text-[28vw] founders leading-48 font-semibold uppercase mt-2 mb-12 mr-10'>
                        We Are Ochi
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
                    className="flex"
                >
                    <h1 className='text-[28vw] founders leading-48 font-semibold uppercase mt-2 mb-12 mr-10'>
                        We Are Ochi
                    </h1>
                    <h1 className='text-[28vw] founders leading-48 font-semibold uppercase mt-2 mb-12 mr-10'>
                        We Are Ochi
                    </h1>
                    <h1 className='text-[28vw] founders leading-48 font-semibold uppercase mt-2 mb-12 mr-10'>
                        We Are Ochi
                    </h1>
                </motion.div>

            </div>
        </div>
    )
}

export default Marquee
