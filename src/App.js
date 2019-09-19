import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from './context/ProductContext';
import { CartContext } from './context/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';

import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
				<ProductContext.Provider value={{products, addItem}}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
