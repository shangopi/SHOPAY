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
// import AddProduct from './admin/addProduct';
// import ViewProduct from './admin/viewProduct';
// import ViewCatecory from './admin/viewCatecory';
// import AddCatecory from './admin/addCategory';
// import AdminHome from './admin/adminHome';
import Navbar from './admin/navbar';

import AdminApp from './admin/adminApp';
const App = () => {
  return (
    <Router>
      <Route path='/' component={Header} exact />
      {/* <Route path='/admin' component={Navbar} exact /> */}
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={login} />
        </Container>
        <Route path='/admin/' component={AdminApp} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
