// import Library für BrowserRouten usw
import { BrowserRouter, Routes, Route } from "react-router-dom";



// import css 
import './App.css';
// import Footer from './components/footer/Footer.jsx';
import Nav from './components/nav/Nav.jsx';


// import pages  für routes
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// import Jenson from './pages/Jenson.jsx';
import Products from './pages/Products.jsx';
import ProductsDetails from "./pages/ProductsDetails.jsx";


//import components 


function App() {
  return (
    <div className="App">

      <>

        <BrowserRouter>

          <Nav></Nav>    {/* hier sind die quasi a-tags zu den Seiten drin */}

          <Routes>

            {/* // ! wenn geklickt, dann wird Seite neu geladen */}
            <Route path="/" element={<Home />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/products" element={<Products />}> </Route>

            {/* Route für Products   zu einzelnen Produkten */}
            <Route path="/products/:name" element={<ProductsDetails />} />

          </Routes>

        </BrowserRouter>

{/*         <Footer></Footer>
 */}
      </>



    </div>
  );
}

export default App;
