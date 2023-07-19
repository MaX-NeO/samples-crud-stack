import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../service/api';
const Add = () => {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    productname:'',
    productprice: 0,
    productquantity: 0
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addProduct(formdata);
      navigate('/')
    }
    catch(error){

    }

    console.log(formdata);
  }
  
  const routeBack = ()=>{
    navigate(-1)
  }
  return (
    <>
      <div className='main'>

        <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
          <h3 className='data-title green'>Add Product</h3>
          <input type="text" name="productname" id="productname" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} required/>
          <input type="number" name="productprice" id="productprice" placeholder='Price' className='data-input bg-secondary black' onChange={handleChange} required/>
          <input type="number" name="productquantity" id="productquantity" placeholder='Quantity' className='data-input bg-secondary black' onChange={handleChange} required/>
          <button type="submit" className='data-btn bg-green white'>Add</button>

        </form>


        <button onClick={routeBack} className='route-btn-1 bg-primary white'>Back</button>
      </div>

    </>
  )
}
export default Add;