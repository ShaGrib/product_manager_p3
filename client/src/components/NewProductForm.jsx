import React, { useState } from 'react';
import axios from 'axios';

const NewProductForm = (props) => {
    let [title, setTitle] = useState('');
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState('');

    let [formErrors, setFormErrors] = useState({});

    const createProductSubmitHandler = (e) => {
        e.preventDefault();
        let formProductObj = { title, price, description };

        axios.post('http://localhost:8000/api/products', formProductObj)
            .then(res => {
                if (res.data.error) {
                    setFormErrors(res.data.error.errors);
                } else {
                    props.setNewProductAdded(!props.newProductAdded);
                }
            })
            .catch(err => console.log('errored out while submitting post', err));
    }

    return (
        <div>
            <form onSubmit={createProductSubmitHandler}>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Title: </label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type='text' name='' id='' className='form-control' />
                    <p className='text-danger'>{formErrors.title?.message}</p>
                </div>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Price: $</label>
                    <input onChange={(e) => { setPrice(e.target.value) }} type='number' name='' id='' className='form-control' />
                    <p className='text-danger'>{formErrors.price?.message}</p>
                </div>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Description: </label>
                    <input onChange={(e) => { setDescription(e.target.value) }} type='text' name='' id='' className='form-control' />
                    <p className='text-danger'>{formErrors.description?.message}</p>
                </div>
                <div>
                    <input type='submit' value='Create Product!' className='btn btn-secondary btn-sm mt-3' />
                </div>
            </form>
        </div>
    );
};

export default NewProductForm;