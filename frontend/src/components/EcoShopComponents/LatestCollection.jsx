import React, { useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
	const { products } = React.useContext(ShopContext);

	const [latestProducts, setLatestProducts] = React.useState([]);
    

	useEffect(() => {
		setLatestProducts(products.slice(0, 10));
	}, [products]);

    return (
        <div className="py-8">
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-white">
                    Discover our newest arrivals, handpicked for you. Explore the latest trends and eco-friendly products in our collection.
                </p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((item, index) => (
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

export default LatestCollection;
