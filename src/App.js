import React from 'react';
import { Routes,Route, BrowserRouter, } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Banner from './Components/Banner/Banner';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import DashboardReview from './Components/Dashboard/DashboardReview/DashboardReview';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';
import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
import Payment from './Components/Dashboard/Payment/Payment';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Product from './Components/Product/Product';
import Review from './Components/Review/Review';

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={
      <div>
      <Banner></Banner>
      <Product></Product>
      <Review></Review>
      <AboutUs></AboutUs>
      </div>
      }></Route>
      <Route path='/home' element={
      <div>
      <Banner></Banner>
      <Product></Product>
      <Review></Review>
      <AboutUs></AboutUs>
      </div>
      }></Route>
      <Route path='/explore' element={
      <Explore></Explore>}></Route>
      <Route path='/placeOrder/:bikeId' element={
      <PlaceOrder></PlaceOrder>}></Route>
      <Route path='/login' element={
        <Login></Login>
      }></Route>
      <Route path='/register' element={
        <Register></Register>
      }></Route>
      <Route path='/dashboard' element={
        <Dashboard></Dashboard>
      }>
        <Route path="home" element={<DashboardHome/>}/>
        <Route path="myorder" element={<MyOrder/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="review" element={<DashboardReview/>}/>           
        <Route path="manageallorders" element={<ManageAllOrders/>}/>           
        <Route path="makeadmin" element={<MakeAdmin/>}/>           
        <Route path="addproduct" element={<AddProduct/>}/>           
        <Route path="manageproduct" element={<ManageProduct/>}/>           
      </Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
