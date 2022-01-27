import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    let [allProducts, setAllProducts] = useState([]);
    let [deleted, setDeleted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setAllProducts(res.data.results);
            })
            .catch(err => console.log('Errored out while getting all', err));
    }, [deleted, props.newProductAdded]);

    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => {
                setDeleted(!deleted);
            })
            .catch(err => console.log('Errored out while deleting', err));
    };

    return (
        <div>
            <h3>All the Products</h3>
            {allProducts.map((productObj, i) => {
                return (
                    <div key={i}>
                        <h4><Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h4>
                        <p>
                            <Link to={`/products/${productObj._id}`} className='btn btn-info' >Details</Link>|
                            <Link to={`/products/edit/${productObj._id}`} className='btn btn-warning' >Edit</Link>|
                            <button onClick={() => deleteProduct(productObj._id)} className='btn btn-danger'>Delete Product</button>
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default AllProducts;