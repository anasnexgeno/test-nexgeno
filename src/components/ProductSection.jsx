import React from "react";

const ProductSection = () => {
    const products = [
        {
            imgSrc: "https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png",
            title: "Sandals",
            description: "Voluptatem Accusantium",
            price: "₹145.93",
            colors: ["black", "#c4c9c8", "#d17b42"],
        },
        {
            imgSrc: "https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png",
            title: "Sandals",
            description: "Voluptatem Accusantium",
            price: "₹145.93",
            colors: ["black", "#c4c9c8", "#d17b42"],
        },
        {
            imgSrc: "https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png",
            title: "Sandals",
            description: "Voluptatem Accusantium",
            price: "₹145.93",
            colors: ["black", "#c4c9c8", "#d17b42"],
        },
        {
            imgSrc: "https://i.ibb.co/372WPgd/IMG-2701a-copy-1.png",
            title: "Sandals",
            description: "Voluptatem Accusantium",
            price: "₹145.93",
            colors: ["black", "#c4c9c8", "#d17b42"],
        },

        // Add more product objects as per requirement
    ];

    return (
        <section id="product" className="selling-section">
            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-5 dm:grid-cols-2 gap-4 mt-3">
                    {/* Featured Image */}
                    <div className="col-span-1 bg-[#EBEBEB] flex flex-col items-center">
                        <img
                            src="https://i.ibb.co/4gJMWJC/IMG-2744ss-copy-4.png"
                            style={{ marginLeft: "-10px", marginTop: "20px" }}
                            width="170px"
                            height="258px"
                            alt="Featured Product"
                            className="pt-[1rem]"
                        />
                    </div>

                    {/* Product Cards */}
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-3 text-dark bg-white shadow-md rounded-md"
                        >
                            <img
                                src={product.imgSrc}
                                className="selling-img"
                                alt="Product Image"
                                style={{ width: "170px", height: "128px" }}
                            />
                            <hr className="w-full mt-3" />
                            <p className="font-bold text-lg mt-3">{product.title}</p>
                            <p>{product.description}</p>
                            <div className="flex gap-2 mt-2">
                                {product.colors.map((color, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full"
                                        style={{
                                            backgroundColor: color,
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    ></span>
                                ))}
                            </div>
                            <div className="price font-semibold text-lg mt-3">
                                {product.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
