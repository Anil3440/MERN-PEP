
import { Route, Routes } from "react-router-dom";
import DataConsumer from "./components/dataConsumer";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Home from "./components/routes/Home";
import DataProvider from "./context/DataProvider";
import NavBar from "./components/NavBar";
import LandingPage from "./components/routes/LandingPage";
import Unknown from "./components/routes/Unknown";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";


const App = () => {

  return (
    <>
      {/* <DataProvider>
        <DataConsumer />
      </DataProvider> */}
      {/* COULD HAVE JUST WRAPPED THE APP COMPONENT WITH THE PROVIDER IN MAIN.JSX */}
        <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path='*' element={<Unknown />} />
      </Routes>
    </>
  )
}


export default App