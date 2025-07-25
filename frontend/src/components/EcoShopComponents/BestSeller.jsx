import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
	const { products } = useContext(ShopContext);
	const [bestSeller, setBestSeller] = React.useState([]);
    

	useEffect(() => {
		const bestProducts = products.filter((item) => item.bestseller);
		setBestSeller(bestProducts.slice(0, 5));
        
	}, [products]);

    return (
        <div className="py-8">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-white">
                    Discover our most popular eco-friendly products, loved by our customers for their quality and sustainability.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
