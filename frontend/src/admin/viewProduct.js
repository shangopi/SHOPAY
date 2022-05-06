import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ViewProduct extends Component {
    state = {  } 
    render() {
        const product = [
            { id: "1", name: 'phone', price: 1000, stock: 15, category: 'electronic device', branchName: 'Orezan', description: 'this is an amazing prodcut.' },
            { id: "1", name: 'phone', price: 1000, stock: 15, category: 'electronic device', branchName: 'Orezan', description: 'this is an amazing prodcut.' },
            { id: "1", name: 'phone', price: 1000, stock: 15, category: 'electronic device', branchName: 'Orezan', description: 'this is an amazing prodcut.' },
            { id: "1", name: 'phone', price: 1000, stock: 15, category: 'electronic device', branchName: 'Orezan', description: 'this is an amazing prodcut.' }
        ]



        return (
            <div className="App">

                <Table  className='mx-5 '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Branch Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {product.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.stock}</td>
                                    <td>{val.category}</td>
                                    <td>{val.branchName}</td>
                                    <td>{val.description}</td>
                                    <td> <div className=' my-3 btn btn-danger bold border-white border-5'>Delete</div> </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
                

            </div>
        )
    }
}
 
export default ViewProduct;