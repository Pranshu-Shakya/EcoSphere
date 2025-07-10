import React, { useEffect } from 'react'
import { ShopContext } from '../../contexts/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const RelatedProducts = ({category}) => {

    const {products} = React.useContext(ShopContext);
    const [related, setRelated] = React.useState([]);

    useEffect(() => {
        if(products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category)

            setRelated(productsCopy.slice(0, 5));
            
        }
    },[products])

  return (
    <div className='py-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className='grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((item, index) => (
                    <ProductItem key={index} id={item._id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts