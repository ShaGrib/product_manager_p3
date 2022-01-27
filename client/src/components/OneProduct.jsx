import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneProduct = () => {
    const { _id } = useParams();

    const history = useHistory();

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res);
                setProductDetails(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => {
                history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h4>Details about {productDetails.title}</h4>
            <p>Price: ${productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
            <button onClick={deleteProduct} className='btn btn-danger'>Delete Product</button>
        </div>
    );
};


export default OneProduct;