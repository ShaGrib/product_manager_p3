import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditProductForm = () => {
    const { _id } = useParams();

    let [productInfo, setProductInfo] = useState({
        title: '',
        price: 0,
        description: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res);
                setProductInfo(res.data.results);
            })
            .catch(err => console.log(err));
    }, [_id]);

    const history = useHistory();

    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        });
    };

    const updateProductSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${_id}`, productInfo)
            .then(res => {
                history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h4>Edit Product</h4>
            <form onSubmit={updateProductSubmitHandler}>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Title: </label>
                    <input type='text' name='title' id='' className='form-control' value={productInfo.title} onChange={changeHandler} />
                </div>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Price: $</label>
                    <input type='text' name='price' id='' className='form-control' value={productInfo.price} onChange={changeHandler} />
                </div>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Description: </label>
                    <input type='text' name='description' id='' className='form-control' value={productInfo.description} onChange={changeHandler} />
                </div>
                <input type='submit' value='Update Product' className='btn btn-secondary btn-sm mt-3' />
            </form>
        </div>
    );
};

export default EditProductForm;