import { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth / 2;
            let deltaY = y - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle - 180);
            console.log(angle)

        })
    })


    return (
        <div data-scroll data-scroll-speed="-.07" data-scroll-section className='w-full h-screen bg-[url("/eye-bg.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
            <div className='flex gap-10 '>
                <div className='w-52 h-52 rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='relative w-3/5 bg-zinc-800 rounded-full h-3/5'>
                        <div
                            style={{ transform: `rotate(${rotate}deg)` }}
                            className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-5'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-52 h-52 rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='relative w-3/5 bg-zinc-800 rounded-full h-3/5'>
                        <div
                            style={{ transform: `rotate(${rotate}deg)` }}
                            className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-5'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Eyes