import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ViewCategory()
{

    const [loading, setLoading] = useState(true);
    const [category, setCategoryList] = useState([]);

    useEffect(()=>{
        let isMountered = true;

        axios.get('/api/getCategory').then(res => {
            if(isMountered)
            {
                if(res.data.status === 200)
                {
                    setCategoryList(res.data.category);
                    setLoading(false);
                }
            }
        });
        
        return () => {
            isMountered = false;
        }

    },[]);

    if(loading)
    {
        return <h4>Loading Categories...</h4>
    }
    else
    {
        var showCategoryList = '';
        
        showCategoryList = category.map((item, idx)=>{
            return (
                <div className="col-md-4" key={idx}>
                    <div className="card">
                        <Link to="">
                            <img src="" className="w-100" alt={item.name} />
                        </Link>
                        <div className="card-body">
                            <Link to={`collections/${item.slug}`}>
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Category Page</h6>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showCategoryList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCategory;