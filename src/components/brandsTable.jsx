
import { getBrands } from '../services/brandsService';
import { deleteBrand } from '../services/brandsService';
import IconButton from '@mui/material/IconButton';
import {deleteCircleOutline} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

function BrandsTable({brands,onDelete,onEdit}) {
  return (
    <div>
    <table className="table">
          <thead>
              <tr>
                  <th>id</th>
                  <th>nameen</th>
                  <th>namear</th>
                  <th>logo</th>
                  <th>descriptionen</th>
                  <th>descriptionar</th>
                  <th>deleting</th>
                 
              </tr>
           </thead>
           <tbody>
            {brands.map((brand) => (
              <tr key={brand._id}>
                <td>{brand._id}</td>
                <td>{brand.nameen}</td>
                <td>{brand.namear}</td>
                <td>{brand.logo}</td>             
                <td>{brand.descriptionen}</td>
                <td>{brand.descriptionar}</td>
                <td> 
                <IconButton aria-label="delete"  color="error" 
                  onClick={ ()=>onDelete(brand) }
                >
                <DeleteIcon />
              </IconButton>
                </td>
              <td>
                <IconButton color="primary" aria-label="add to shopping cart"
                  onClick={()=>onEdit(brand)}
                >
                  <EditIcon />
                </IconButton>
              </td>
              </tr>
            ))}
            </tbody>
          </table>
          




    </div>
  );
}

export default BrandsTable;
