import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Registerform from './pages/Registerform'
import {BrowserRouter as Router,Route,Routes}from"react-router-dom";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/Shop-context";
function App(){
	return(
		<div className="App">
		<ShopContextProvider>
    <Router>
	<Navbar/>
		<Routes>
			<Route path="/"exact Component={Home}/>
			<Route path="/about"exact Component={About}/>
			<Route path="/contact"exact Component={Contact}/>
			<Route path="/login"exact Component={Login}/>
			<Route path="/register"exact Component={Registerform}/>
			<Route path="/cart" exact Component={Cart}/>
			<Route path="/shop" exact Component={Shop}/>
			</Routes>
     </Router>
	 </ShopContextProvider>
		</div>
	)
}

export default App;
