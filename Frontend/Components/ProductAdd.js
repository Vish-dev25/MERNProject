import React, { Component } from 'react';
import axios from 'axios';

class ProductAdd extends Component {
    constructor(props) {
        super();
        this.state = { arrProduct: [], msg:'' }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const URL = "http://localhost:3001/products/add"
        axios.post(URL, this.state.arrProduct).then(res => {
            console.log(res);
            if (res.status === 200) {
                this.setState({ msg: 'Record has been inserted' });
            }
        });
        console.log(this.state.arrProduct)
    }
    onChangeHandler = (e) => {
        let { name, value } = e.target;
        let { arrProduct } = this.state;
        if(name==='status' && value==='pStatus')
        {
            value = true;
        }
        this.setState({ arrProduct: { ...arrProduct,[name]:value } });
    }

    render() {
        let { arrProduct, msg } = this.state;
        return (
            <>
                <div className='col-12 col-sm-8 col-md-5 m-auto'>
                    <div className='card card-body'>
                        <span className="alert-success">{msg}</span>

                        <form onSubmit={this.onSubmit}>
                            <h5 className='text-center' >Add Product</h5>

                            <div className='form-group'>
                                <label>Product Name</label>
                                <input type='text' name='name' className='form-control' value={arrProduct.name} placeholder='Enter product name' onChange={this.onChangeHandler} />
                            </div>

                            <div className='form-group'>
                                <label>Supplier Name</label>
                                <input type='text' name='supplier' className='form-control' value={arrProduct.supplier} placeholder='Enter supplier name' onChange={this.onChangeHandler} />
                            </div>

                            <div className='form-group'>
                                <label>Description</label>
                                <input type='text' name='description' className='form-control' value={arrProduct.description} placeholder='Enter product description' onChange={this.onChangeHandler} />
                            </div>

                            <div className='form-group'>
                                <label>Price</label>
                                <input type='number' name='price' className='form-control' value={arrProduct.price} placeholder='Enter product price' onChange={this.onChangeHandler} />
                            </div>

                            <div className='form-group'>
                                <label>Product Quantity</label>
                                <input type='number' name='quantity' className='form-control' value={arrProduct.quantity} placeholder='Enter product quantity' onChange={this.onChangeHandler} />
                            </div>

                            <div className='form-group'>
                                <label>Status</label>
                                <input type='radio' name='status' value='pStatus' onChange={this.onChangeHandler}/>
                            </div>

                            <div className='form-group text-center'>
                                <button type='submit' className='btn btn-info'>Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }



}

export default ProductAdd