import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function ViewProduct(){

    const [loading, setLoading] = useState(true);
    const [viewproduct, setProduct] = useState([]);

    useEffect(()=>{

        document.title = "View Product";

        axios.get('/api/view-product').then(res => {
            console.log(res.data.product);
            if(res.status === 200)
            {
                setProduct(res.data.product);
                setLoading(false);
            }
        });
    },[]);

    var display_Productdata = "";
    if(loading)
    {
        return <h4>Loading View Product ...</h4>
    }
    else
    {
        display_Productdata=
        viewproduct.map((item)=>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.selling_price}</td>
                    <td><img src={`${axios.defaults.baseURL}${item.image}`} width="50px" alt={item.name}/></td>
                    <td>
                        <Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <div className="container px-4">
            <div className="card px-4 mt-3">
                <div className="card-header">
                    <h4>View Product
                        <Link to="/admin/add-product" className="btn btn-success btn-sm float-end">Add Product</Link>
                    </h4>
                </div>                
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Product Name</th>
                                <th>Selling Price</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {display_Productdata}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;