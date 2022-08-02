import axios from "axios";

const url = 'http://147.182.183.104/api/brands';
// const url = 'https://development-shop.herokuapp.com/api/brands';
export async function getBrands(){
    const res = await axios.get(url)
    return res.data;
}
export async function insertBrand(brand){
    const res = await axios.post(url,brand);
    console.log(res);
}
export async function deleteBrand(id){
    const res = await axios.delete(url+'/'+id);
    console.log(res);
}
export async function updateBrand(id,brand){
    const res = await axios.put(url+'/'+id,brand);
    console.log(res);
}