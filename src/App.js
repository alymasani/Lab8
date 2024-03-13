import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';

import ProductList from './compnents/ProductList';
import NotFoundPage from './compnents/NotFoundPage';
import HomePage from './compnents/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router>
          <div>
            {/* Navigation Links */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Product List</Link>
                </li>
                <li>
                  <Link to="/product/add">Add Product</Link>
                </li>
              </ul>
            </nav>

            {/* Routes for different pages */}
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} /> {/* Catch all other route */}
            </Routes>
          </div>
        </Router>
      </ProductsProvider>
    </div>
  );
}

export default App;
