import React from 'react';

const products = [
    {
        id: 1,
        name: 'Sandals',
        description: 'Voluptatem Accusantium',
        price: '₹145.93',
        image: 'https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png',
        colors: ['black', '#c4c9c8', '#d17b42'],
    },
    {
        id: 2,
        name: 'Sandals',
        description: 'Voluptatem Accusantium',
        price: '₹145.93',
        image: 'https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png',
        colors: ['black', '#c4c9c8', '#d17b42'],
    },
    {
        id: 3,
        name: 'Sandals',
        description: 'Voluptatem Accusantium',
        price: '₹145.93',
        image: 'https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png',
        colors: ['black', '#c4c9c8', '#d17b42'],
    },
    {
        id: 4,
        name: 'Sandals',
        description: 'Voluptatem Accusantium',
        price: '₹145.93',
        image: 'https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png',
        colors: ['black', '#c4c9c8', '#d17b42'],
    },
    {
        id: 5,
        name: 'Sandals',
        description: 'Voluptatem Accusantium',
        price: '₹145.93',
        image: 'https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png',
        colors: ['black', '#c4c9c8', '#d17b42'],
    },
    {
        id: 6,
        name: 'Sandals',
        description: 'Voluptatem Accusantium',
        price: '₹145.93',
        image: 'https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png',
        colors: ['black', '#c4c9c8', '#d17b42'],
    },
];

const BestSelling = () => {
    return (
        <section id="Best-Selling" className="mt-5 mx-3 dm:overflow-hidden m=4">
            <div className="container mx-auto">
                <h2 className="mb-4 text-2xl font-bold">Best Selling</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-3">
                    {products.map((product) => (
                        <div key={product.id} className="p-3 bg-white shadow rounded text-dark">
                            <img src={product.image} className="w-full h-auto" alt={product.name} />
                            <hr className="my-2" />
                            <p className="text-sm text-center mt-3">{product.name}</p>
                            <p className="text-sm text-center font-semibold">{product.description}</p>
                            <div className="flex space-x-1  justify-self-center ml-8 dm:ml-12 items-center mt-2">
                                {product.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="block w-5 justify-self-center h-5 items-center rounded-full"
                                        style={{ backgroundColor: color }}
                                    ></span>
                                ))}
                            </div>
                            <div className="text-lg font-semibold text-center mt-2">{product.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="black-friday-banner w-[70rem] dm:w-[50rem] mx-28 dm:mx-0  mt-12 relative">
                <img src="https://i.ibb.co/3YhbVM1/Rectangle-319.png" alt="Black Friday Banner" className="w-full h-auto" />
                <div className="absolute inset-0 flex justify-center items-center ml-[20rem] space-x-4 mt-5">
                    <img src="https://i.ibb.co/4gJMWJC/IMG-2744ss-copy-4.png" alt="Sandal Image 1" className="w-[250px] dm:-ml-60 h-auto" />
                    <img src="https://i.ibb.co/4gJMWJC/IMG-2744ss-copy-4.png" alt="Sandal Image 2" className="w-[250px] h-auto" />
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
