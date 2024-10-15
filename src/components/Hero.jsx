// import React from 'react'

// const Hero = () => {
//     return (
//         <>
//             <section id="hero"
//                 className="flex dm:overflow-hidden flex-col-reverse mt-[300px] bg-[#FFFFFF] dm:mt-[17rem] dm:gap-y-10 dm:flex-row md:flex-row items-center bg-gray-100 py-8 px-4 md:px-8">
//                 <div className="container text-left md:text-left md:w-1/2 space-y-4">
//                     <h3 className="text-xl text-[#EB9D26] md:text-2xl font-semibold -mt-60">Step into Style:</h3>
//                     <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Wholesale Wonderland for Women's Footwear!</h1>
//                     <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
//                         doloremque
//                         laudantium</p>
//                     <button className="bg-[#797979] text-white py-2 px-6 rounded hover:bg-indigo-500 transition duration-300">Shop
//                         Now</button>
//                 </div>

//                 <div className="flex items-center justify-center -mr-[85rem] dm:mt-[400px] md:w-1/2 dm:absolute relative">
//                     {/* <div className="relative flex-shrink-0  row ml-40">
//                         <img src="./src/assets/SALE.png" alt="Sale"
//                             className=" -mt-40  relative" />
//                         <img src="./src/assets/SALE.png" alt="Sale"
//                             className="auto -mt-[24rem] ml-[12rem] relative " />
//                     </div> */}
//                     <div className=" dm:mt-60 relative dm:overflow-hiddden  w-full w-[100rem] dm:w-[50rem] ">
//                         <div className=" -mt-60 -mr-20 dm:ml-[-0rem]">
//                             <img src="./src/assets/IMG_2792ss-copy 2.png" alt="Footwear"
//                                 className="hero-footwear w-[80%] dm:w-[40%] object-contain" />
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </>
//     )
// }

// export default Hero

import React from 'react';

const Hero = () => {
    return (
        <div className="bg-gray-100 flex flex-col dm:mb-[-38rem] md:flex-row items-center justify-between p-6 rounded-lg shadow-lg">
            <div className="container text-left mt-60 dm:mt-80 md:text-left md:w-1/2 space-y-4">
                <h3 className="text-xl text-[#EB9D26] md:text-2xl font-semibold -mt-60">Step into Style:</h3>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Wholesale Wonderland for Women's Footwear!</h1>
                <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque
                    laudantium</p>
                <button className="bg-[#797979] text-white py-2 px-6 rounded hover:bg-indigo-500 transition duration-300">Shop
                    Now</button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                    src="https://i.ibb.co/fn7WMTW/IMG-2792ss-copy-2-1.png"
                    alt="Footwear"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default Hero;
