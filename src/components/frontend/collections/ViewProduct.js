import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';

function ViewProduct(props)
{

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        const product_slug = props.match.params.slug;
        axios.get(`/api/fetchproducts/${product_slug}`).then(res => {
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setProduct(res.data.product_data.product);
                    setCategory(res.data.product_data.category);
                    setLoading(false);
                }
                else if(res.data.status === 400)
                {
                    history.push('/collections');
                    swal("Warning",res.data.message,"message");
                }
                else if(res.data.status === 404)
                {
                    history.push('/collections');
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        
        return () => {
            isMounted = false;
        }

    },[props.match.params.slug, history]);

    if(loading)
    {
        return <h4>Loading Products...</h4>
    }
    else
    {
        var showProductList = '';
        
        showProductList = product.map((item, idx)=>{
            return (
                <div className="col-md-3" key={idx}>
                    <div className="card">
                        <Link to="">
                            <img src={`${axios.defaults.baseURL}${item.image}`} className="w-100" alt={item.name} />
                        </Link>
                        <div className="card-body">
                            <Link to={`products/${item.slug}`}>
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Category / Product Name</h6>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showProductList}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;