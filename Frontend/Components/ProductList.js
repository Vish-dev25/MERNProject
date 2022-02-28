import React, { Component } from 'react';
import axios from 'axios';
import ProductAdd from './ProductAdd';

class ProductList extends Component {
    constructor(props) {
        super();
        this.state = { arrProduct: [], eid: '',msg:'' }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/products/all')
            .then(res => {
                this.setState({ arrProduct: res.data })
                console.log(res.data)
            })
    }

    onDelete = (eid) => {
        axios.delete("http://localhost:3001/products/delete/" + eid).then(res => {
            console.log("Product Deleted ", res);
        })
    }

    render() {
        let { arrProduct} = this.state;
        return (
            <>

                <div>
                    <h3>Shopping Cart Items</h3>
                    <div className='cart-items'>
                        <div className='card card-body shadow p-3 mb-5 bg-body rounded'>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Supplier</th>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Status</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        {arrProduct.map((item, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td>{item._id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.supplier}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><input type="checkbox" checked={item.status} onChange={()=>{}}/> </td>
                                                    <td><button className='btn btn-outline-danger btn-sm' onClick={() => this.onDelete(item._id)}>Delete</button> </td>
                                                    <td><button className='btn btn-outline-warning btn-sm' onClick={() => this.onUpdate(item._id)}>Update</button> </td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                 
                            </div>

                        </div>
                    </div>
                </div>
                <ProductAdd />
                {/* form */}
                {/* <div className='col-12 col-sm-8 col-md-5 m-auto'>
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
                                <input type='radio' name='status' value='pstatus' onChange={this.onChangeHandler}/>
                            </div>

                            <div className='form-group text-center'>
                                <button type='submit' className='btn btn-info'>Add</button>
                            </div>

                        </form>
                    </div>
                </div> */}
            </>
        )
    }

}

export default ProductList