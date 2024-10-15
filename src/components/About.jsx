import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="w-full dm:overflow-hidden bg-[#FFFFFF] flex flex-col items-center pt-80 py-12 px-6">
            {/* Image and Sale Section */}
            <div className="w-full relative mb-8 -mt-60 dm:mt-80 dm:ml-0 -ml-[800px] max-w-md">
                <img src="https://i.ibb.co/TcxLrkh/Rectangle-302-1.png" alt="Main Image" className="w-full h-auto object-cover" />
                <img src="https://i.ibb.co/ZLxML0q/SALE-1.png" alt="Sale" className="absolute top-80 dm:top-20 right-4 w-80 md:w-32 h-auto" />
            </div>

            {/* Grid Container for Collections */}
            <div className="grid grid-cols-2 bg-[#FFFFFF] md:grid-cols-4 dm:mt-[0rem] dm:ml-0 -mt-[28rem] ml-[29rem] gap-3 w-full max-w-3xl">
                {/* Grid Item 1 */}
                <div className="text-center bg-[#EBEBEB]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Bridal Collection" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Bridal Collection</p>
                </div>
                {/* Grid Item 2 */}
                <div className="text-center bg-[#F8F8F8]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="New Arrivals" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">New Arrivals</p>
                </div>
                {/* Grid Item 3 */}
                <div className="text-center bg-[#EBEBEB]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Casual Collection" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Casual Collection</p>
                </div>
                {/* Grid Item 4 */}
                <div className="text-center bg-[#F8F8F8]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Diwali Collection" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Diwali Collection</p>
                </div>
                {/* Grid Item 5 */}
                <div className="text-center bg-[#F8F8F8]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Best Selling" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Best Selling</p>
                </div>
                {/* Grid Item 6 */}
                <div className="text-center bg-[#EBEBEB]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Featured Collection" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Featured Collection</p>
                </div>
                {/* Grid Item 7 */}
                <div className="text-center bg-[#F8F8F8]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Casual Collection" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Casual Collection</p>
                </div>
                {/* Grid Item 8 */}
                <div className="text-center bg-[#EBEBEB]">
                    <img src="https://i.ibb.co/X3nsbZ8/IMG-2693s-copya-3.png" alt="Diwali Collection" className="w-full h-auto object-cover" />
                    <p className="mt-2 text-gray-700 font-semibold">Diwali Collection</p>
                </div>
            </div>

            {/* Swiper Image Section */}
            <div className="grid grid-cols bg-[#FFFFFF] md:grid-cols-3 dm:mt-[5rem] dm:ml-0 mt-5 gap-3 w-full max-w-7xl">
                <img src="https://i.ibb.co/3fCygfR/Rectangle-311.png" alt="Image 1" className="w-full h-auto object-cover" />
                <img src="https://i.ibb.co/C8dFWYQ/Rectangle-312.png" alt="Image 2" className="w-full h-auto object-cover" />
                <img src="https://i.ibb.co/RCHLvts/Rectangle-313.png" alt="Image 3" className="w-full h-auto object-cover" />
            </div>
        </section>
    );
};

export default AboutSection;
