import React from 'react'
const About = () => {
    return (
        <div data-scroll data-scroll-speed="-.10" data-scroll-section className='w-full py-20 rounded-t-3xl bg-[#CDEA68] font-[Neue_Montreal]'>
            <h1 className='text-zinc-950 text-[4vw] leading-none pl-9 pr-16 mb-11'>We craft category-defining presentations, brand identities, and digital experiences that <span className="underline">drive funding,</span> <span className="underline">sales,</span> and <span className="underline">market leadership.</span></h1>
            <div className='w-full border-t-[1px] border-[#859c33] bg-[#CDEA68] flex gap-5'>
                <div className='w-1/2 pl-9'>
                    <h1 className='text-[4vw] mt-3'>How we can help:</h1>
                    <button className='flex items-center justify-between gap-6 bg-zinc-800 text-white rounded-full px-6 py-4 mt-4 uppercase text-sm'>
                        Read more
                        <div className='w-2 h-2 bg-zinc-200 rounded-full'></div>
                    </button>
                </div>
                <img src="/about-img.jpg" alt='' className='w-1/2 h-[70vh] rounded-xl mt-2.5 mr-5' />
            </div>
        </div>
    )
}

export default About