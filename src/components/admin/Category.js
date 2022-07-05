import React, { useState } from 'react';

function Category() {

    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        Descrip: '',
        status: '',
        meta_title: '',
        meta_keywords: '',
        meta_descrip: '',
    });

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value})
    }

    const submitCategory = (e) => {
        e.persist();
        const data = {
            
        }
    }

    return (
        <div className='container-fluid px-4'>
            <h1 className='mt-4'>Category</h1>
            <form onSubmit={SubmitCategory}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className='form-group mb-3'>
                            <label>Slug</label>
                            <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Name</label>
                            <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Description</label>
                            <textarea name="Descrip" onChange={handleInput} value={categoryInput.Descrip} className="form-control"></textarea>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Status</label>
                            <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} />Status 0=shown/1=hidden
                        </div>
                    </div>
                    <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                        <div className='form-group mb-3'>
                            <label>Meta Title</label>
                            <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Meta Keywords</label>
                            <textarea name="meta_keywords" onChange={handleInput} value={categoryInput.meta_keywords} className="form-control"></textarea>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Meta Description</label>
                            <textarea name="meta_descrip" onChange={handleInput} value={categoryInput.meta_descrip} className="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className='btn btn-primary px-4 float-end' name="confirm_password">Submit</button>
            </form>
        </div>
    )
}

export default Category;