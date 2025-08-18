import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router'ı içe aktar
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Product from "./components/ProductList";
import Contact from "./components/Contact";
import Shopping from "./components/Shopping"; 

const App = () => {
  return (
    <BrowserRouter> 
      <Navigation />
      <Routes>
        
        <Route path="/" element={
          <>
            <Hero />
            <Product />
            <Contact />
          </>
        } />
        <Route path="/shopping" element={
          <>
          <Shopping />
          <Contact />
          </>
        }/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;