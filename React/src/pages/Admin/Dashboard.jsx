import React from 'react'
import { useState, useEffect } from 'react';
import { getProduct, deleteProduct, getFeedback, deleteFeedback } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Trash, FileEdit, PlusCircle, Mail,Power } from 'lucide-react';
const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProduct()
      setProducts(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }
  const fetchFeedbacks = async () => {
    try {
      const response = await getFeedback();
      setFeedbacks(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
    fetchFeedbacks();
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  }
  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id);
      console.log(res.status)
      if (res.status == 200) {
        toast.success('Successfully Product Deleted !');
      }
      fetchProducts();
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleDeleteFeedback = async (id) => {
    try {
      const res = await deleteFeedback(id);
      console.log(res.status)
      if (res.status == 200) {
        toast.success('Successfully Feedback Deleted !');
      }
      fetchFeedbacks();
    }
    catch (error) {
      console.log(error);
    }
  }
  const routeAdd = () => {
    navigate('/admin/add')
  }
  const routeLogout = () => {
    navigate('/')
  }
  return (
    <>
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
                  <td>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleEdit(product.pid)}><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleDelete(product.pid)}><Trash color="#ff0000" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='shadow bg-white'>
          <table className='data-table'>
            <thead>
              <tr>
                <th>
                  Feedback ID
                </th>
                <th>
                  User Name
                </th>
                <th>
                  User Email
                </th>
                <th>
                  Question 
                </th>
                <th>
                  Answers 
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.fid}>
                  <td>{feedback.fid}</td>
                  <td>{feedback.uname}</td>
                  <td>{feedback.uemail}</td>
                  <td>Rate Your Experience</td>
                  <td>{feedback.answer}</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleDeleteFeedback(feedback.fid)}><Trash color="#ff0000" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>        
        <Toaster />
        
        <button onClick={routeLogout} className='route-btn-2 bg-white'><Power color="#ff0000" /></button>
        <button onClick={routeAdd} className='route-btn-1 bg-white'><PlusCircle color="#25db00" /></button>
      </div>

    </>
  )
}
export default Dashboard;