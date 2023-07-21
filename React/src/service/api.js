import axios from "axios";

const URI=  'http://localhost:7777'
const URI2= 'http://localhost:7778'

//endpoint 1
const getProduct = () => axios.get(`${URI}/product/get`)
const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const addProduct = (product) => axios.post(`${URI}/product/add`,product)
const editProduct = (id,product)=>axios.put(`${URI}/product/edit/${id}`,product)
const deleteProduct=(id)=>axios.delete(`${URI}/product/delete/${id}`)

//endpoint 2
const getFeedback = ()=>axios.get(`${URI2}/feedback/get`)
const addFeedback=(feedback)=>axios.post(`${URI2}/feedback/add`,feedback)
const deleteFeedback=(id)=>axios.delete(`${URI2}/feedback/delete/${id}`)
export {getProduct,getProductbyId,addProduct,editProduct,deleteProduct,getFeedback,addFeedback,deleteFeedback }


// `` --> template string 

// '' --> string

