import React, { useState, useEffect } from 'react'
import { getProduct } from '../../service/api'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setProducts(response.data);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        <div className='main'>
            <Navbar/>
            {products.map((product) => (

                <div key={product.pid} className='card-cli shadow'>
                    <img src={product.productimage} className='product-cli-img'/>
                    <h2 className='red'>{product.productname}</h2>
                    
                    <h5>{product.productprice} </h5>
                    <h5>{product.productquantity}</h5>
                    <button className='product-btn'>Buy now</button>
                </div>
            ))}


            <Footer/>
        </div>
    )
}
export default Products;
