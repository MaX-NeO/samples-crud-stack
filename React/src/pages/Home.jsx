import React, { useState, useEffect } from 'react'
import { Mail,User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getProduct } from '../service/api'
const Home = () => {
    const navigate = useNavigate();
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

    const routeFeedback = () => {
        navigate('/feedback')
    }
    const routeLogin = () => {
        navigate('/admin/dashboard')
    }

    return (

        <div className='main'>
            {products.map((product) => (

                <div key={product.pid} className='card shadow'>
                    <h2 className='red'>{product.productname}</h2>
                    <h5>{product.productprice} </h5>
                    <h5>{product.productquantity}</h5>
                </div>
            ))}


            <button onClick={routeFeedback} className='route-btn-2 bg-white'><Mail color="#e100ff" /></button>
            <button onClick={routeLogin} className='route-btn-1 bg-white'><User color="#006eff" /></button>
        </div>
    )
}
export default Home;
