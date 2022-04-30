import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import products from '../products';
import Navbar from './navbar';


class ViewCategory extends Component {
    state = {  } 
    render() {
        const category = [
            { id: "1" , category:'mobiles', products:['mobile one','mobile two','mobile three'] },
            { id: "2" , category:'mobiles', products:['mobile one','mobile two','mobile three'] },
            { id: "3" , category:'mobiles', products:['mobile one','mobile two','mobile three'] }
        ]



        return (
            <div className="App">
            <Navbar />

                <Table className='mx-5 '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Products</th>
                        </tr>
                    </thead>
                    <tbody>

                        {category.map ( (val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.category}</td>
                                    <td>
                                        <ul>{val.products[0]}</ul>
                                        <ul>{val.products[1]}</ul>
                                        <ul>{val.products[2]}</ul>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>


            </div>
        )
    }
}
 
export default ViewCategory;