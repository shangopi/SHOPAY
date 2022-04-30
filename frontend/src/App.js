import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Axios from 'axios'
import login from './screens/LoginScreen';
import AddProduct from './admin/addProduct';
import ViewProduct from './admin/viewProduct';
import ViewCatecory from './admin/viewCatecory';
import AddCatecory from './admin/addCategory';
import AdminHome from './admin/adminHome';
import Navbar from './admin/navbar';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={login} />
        </Container>

        <Route path='/admin/dashboard' component={AdminHome} exact />
          <Route path='/admin/addproduct' component={AddProduct} exact />
          <Route path='/admin/viewproduct' component={ViewProduct} exact />
          <Route path='/admin/others' component={Navbar} exact />
          <Route path='/admin/addcategory' component={AddCatecory} exact />
          <Route path='/admin/viewcategory' component={ViewCatecory} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
