
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BMX from './components/BMXDashboard';
import ImageSlider from './components/ImageSlider';
import NavBar from './components/NavBar';
import Shoes from './components/ShoesDashboard';
import Skateboards from './components/SkateboardsDashboard';
import Trucks from './components/TrucksDasboard';
import Footer from './components/Footer';
import RandomProducts from './components/RandomProducts';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetails';
import BurguerMenu from './components/BurguerMenu';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <BurguerMenu />
      <ImageSlider />
      <RandomProducts />
      <Routes>
        <Route path="/skateboards" element={<Skateboards />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/bmx" element={<BMX />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not Found</Route >
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
