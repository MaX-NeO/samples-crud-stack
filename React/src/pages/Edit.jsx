import { useState } from 'react';
import { getProductbyId, editProduct } from '../service/api';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Edit = () => {
  const { productId } = useParams();
  const navigate =useNavigate()
  console.log(productId)
  const [formdata, setFormdata] = useState({
    productname: '',
    productprice: 0,
    productquantity: 0
  })
  const fetchProduct = async () => {
    try {
      const response = await getProductbyId(productId);
      setFormdata(response.data);
    }
    catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    fetchProduct()
  }, [productId])
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(productId, formdata);
      navigate('/')
    }
    catch (error) {
      console.log(error);
    }
  }
  const routeBack = ()=>{
    navigate(-1)
  }
  return (
    <>
      <div className='main'>

        <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
          <h3 className='data-title yellow'>Edit Product</h3>
          <input type="text" name="productname" id="productname" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} value={formdata.productname} required/>
          <input type="number" name="productprice" id="productprice" placeholder='Price' className='data-input bg-secondary black' onChange={handleChange} value={formdata.productprice} required/>
          <input type="number" name="productquantity" id="productquantity" placeholder='Quantity' className='data-input bg-secondary black' onChange={handleChange} value={formdata.productquantity} required/>
          <button type="submit" className='data-btn bg-yellow white'>Update</button>

        </form>


        <button onClick={routeBack} className='route-btn-1 bg-primary white'>Back</button>
      </div>

    </>
  )
}
export default Edit;