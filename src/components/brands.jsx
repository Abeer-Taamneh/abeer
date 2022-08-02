import { ContentCutOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import { deleteBrand, getBrands } from '../services/brandsService';
import BrandsForm from './brandsForm';
import BrandsTable from './brandsTable';
import {  insertBrand, updateBrand } from '../services/brandsService';
export default class Brands extends Component {
state={brands:[],
        brand:{nameen:'',namear:'',logo:'abcd'}
    }
async componentDidMount() {
    this.update();
  }
  async update(){
    const brands= await getBrands();
    const brand= {nameen:'',namear:''}
    this.setState({brands,brand});
    
  }
  handleNameEnChanged(val){
    const {brand} = this.state;
    brand.nameen = val;
    this.setState({brand})
    brand.nameen = val;
  }
 
   handleNameArChanged(val){
    const {brand} = this.state;
    brand.namear = val;
     this.setState({brand})
     brand.namear = val;

   }
 
   async handleDelete(brand){
    await deleteBrand(brand._id);
    this.update();
   }
async handleSubmit(){
    const {brand} = this.state;
    if(brand._id){
        await updateBrand(brand._id,{nameen:brand.nameen,namear:brand.namear});
    }
    else
        await insertBrand(this.state.brand);
    this.update();

}
async handleEdit(brand){
    this.state.brand = brand;
    this.setState({brand}) 
    console.log(brand);
// awit this.update
}

  render() {
    return (
      <div>
            <BrandsForm brand={this.state.brand} onUpdate ={()=>console.log('update called')} 
            OnNameenChanged={(val)=>{this.handleNameEnChanged(val) }}  
            OnNamearChanged={(val)=>{this.handleNameArChanged(val)}}
            onSubmit = {()=>this.handleSubmit()}
           />
           <BrandsTable brands={this.state.brands} onDelete ={(brand)=>this.handleDelete(brand)} onEdit={(brand)=>this.handleEdit(brand)}/>
      </div>
    )
  }
}
