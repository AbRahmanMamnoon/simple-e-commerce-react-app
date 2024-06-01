import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './component/navbar';
import { Shop } from './pages/shop/shop-copy';
import { Cart } from './pages/cart/cart-copy';
import { ShopcontextProvider } from './context/shop-context-copy';

function App() {
  return (
    <div className="App">
      <ShopcontextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopcontextProvider>
    </div>
  );
}

export default App;
