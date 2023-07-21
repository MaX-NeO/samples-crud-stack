import { useState } from 'react';
import { getProductbyId, editProduct } from '../../service/api';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronLeftCircle } from 'lucide-react';
const Edit = () => {
  const { productId } = useParams();
  const navigate =useNavigate()

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
  }, [])
  const handleChange = () => {
    setFormdata({ ...formdata, [target.id]: target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(productId, formdata);
      navigate('/admin/dashboard')
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


        <button onClick={routeBack} className='route-btn-1 bg-white'><ChevronLeftCircle color="#25db00" /></button>
      </div>

    </>
  )
}
export default Edit;