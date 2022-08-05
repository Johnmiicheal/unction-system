import socketIO from 'socket.io-client';
import AddProduct from './components/AddProduct';
import BidProduct from './components/BidProduct';
import Products from './components/Products';
import Header from './components/Header';
import Home from './components/Home';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


const socket = socketIO.connect('http://localhost:4000');

function App() {
  return(
	  <Router>
		<div>
			<Header socket={socket} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="products/add" element={<AddProduct socket={socket} />} />
				<Route path="/products/bid/:name/:price" element={<BidProduct socket={socket} />} />
			</Routes>
		</div>
	</Router>
  );
}

export default App;
