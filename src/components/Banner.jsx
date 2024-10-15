import React from 'react'

const Banner = () => {
    return (
        <div className='bg-black  text-white'>
            <div className="mx-20 dm:mx-3 flex-row py-8">
                <div className="flex-row w-[50%] dm:w-[90%]">
                    <p className=" text-2xl dm:text-lg  ">We believe in</p>
                    <h1 className='text-4xl dm:text-xl font-bold ml-28 dm:ml-24 dm:-mt-8 -mt-10'>providing quality products from </h1>
                    <h1 className='text-4xl dm:text-xl font-bold dm:font-semibold '>reputed manufacturers.</h1>
                </div>
                <div className="ml-[64rem] dm:ml-[0px] dm:mt-4 -mt-14">
                    <button className="border-white border px-5 py-2 rounded">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner