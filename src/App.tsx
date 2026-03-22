/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Shared layout (Header + SubNav + Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          {/* Category routes */}
          <Route path="/journals" element={<CategoryPage />} />
          <Route path="/journals/:subcategory" element={<CategoryPage />} />
          <Route path="/magazines" element={<CategoryPage />} />
          <Route path="/magazines/:subcategory" element={<CategoryPage />} />
          <Route path="/books" element={<CategoryPage />} />
          <Route path="/books/:subcategory" element={<CategoryPage />} />
          <Route path="/subscriptions" element={<CategoryPage />} />
        </Route>
        {/* Auth pages — no shared layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
