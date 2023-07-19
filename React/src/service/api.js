import axios from "axios";

const URI='http://localhost:8080'

const getProduct = () => axios.get(`${URI}/product/get`)
const addProduct = (product) => axios.post(`${URI}/product/add`,product)
const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editProduct = (id,product)=>axios.put(`${URI}/product/edit/${id}`,product)
const deleteProduct=(id)=>axios.delete(`${URI}/product/delete/${id}`)

export {getProduct,getProductbyId,addProduct,editProduct,deleteProduct}
