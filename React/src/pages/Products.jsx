import React from 'react'
import { useState, useEffect } from 'react';
import { getProduct, deleteProduct } from '../service/api';
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProduct()
      setProducts(response.data);
      console.log(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    }
    catch (error) {
      console.log(error);
    }
  }
  const routeAdd = ()=>{
    navigate('/add')
  }
  return (
    <div className='main'>
      <div className='shadow bg-white'>
        <table className='data-table'>
          <thead>

            <tr>
              <th>
                Product ID
              </th>
              <th>
                Product Name
              </th>
              <th>
                Product Price
              </th>
              <th>
                Product Quantity
              </th>
              <th>
                Actions
              </th>

            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.pid}>
                <td>{product.pid}</td>
                <td>{product.productname}</td>
                <td>{product.productprice}</td>
                <td>{product.productquantity}</td>
                {console.log(product.quantity)}
                <td>
                  <button className='data-btn-mini bg-yellow white' onClick={() => handleEdit(product.pid)}>edit</button>
                  <button className='data-btn-mini bg-red white' onClick={() => handleDelete(product.pid)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={routeAdd} className='route-btn-1 bg-primary white'>Add</button>
    </div>
  )
}
export default Products;