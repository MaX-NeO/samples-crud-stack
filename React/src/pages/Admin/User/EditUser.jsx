import { useState } from 'react';
import { getUserbyId, editUser } from '../../../service/api';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronLeftCircle } from 'lucide-react';
import Layout from '../Layout/Layout';

const EditUser = () => {
  const { userId } = useParams();
  const navigate =useNavigate()
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    number: 0,
    password:''
  })
  const fetchUsers = async () => {
    try {
      const response = await getUserbyId(userId);
      setFormdata(response.data);
    }
    catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    fetchUsers()
  }, [])
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await editUser(userId, formdata);
      navigate('/admin/users/view')
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
      <Layout/>
      <div className='mainx'>

        <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
          <h3 className='data-title yellow'>Edit User</h3>
          <input type="text" name="username" id="username" placeholder='Username' className='data-input bg-secondary black' onChange={handleChange} value={formdata.name} required/>
          <input type="email" name="email" id="email" placeholder='Email' className='data-input bg-secondary black' onChange={handleChange} value={formdata.email} required/>
          <input type="number" name="phone" id="phone" placeholder='Phone' className='data-input bg-secondary black' onChange={handleChange} value={formdata.phone} required/>
          <input type="text" name="password" id="password" placeholder='Password' className='data-input bg-secondary black' onChange={handleChange} value={formdata.password} required/>

          <button type="submit" className='data-btn bg-yellow white'>Update</button>

        </form>


        <button onClick={routeBack} className='route-btn-1 bg-white'><ChevronLeftCircle color="#25db00" /></button>
      </div>

    </>
  )
}
export default EditUser;