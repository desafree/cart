import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { useState } from "react";
import Product from "./pages/Product";
import Cart from "./page-elements/cart";


const RouteSwitch = () => {
  const [products,setProducts] = useState([{title:'Playstation 5', description:'Sony PlayStation 5 Digital Edition 825 GB Wi-Fi', price:399.99, qty:1, img:'https://static1.unieuro.it/medias/sys_master/root/hcd/hf4/33081671581726/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-9cdf3d19f4aa5b55ea863fcf3a0b2ce4-preview-sgmConversionBaseFormat-sgmProductFormat.jpg'},{title:'GamePad PS5', description:'Sony Controller wireless DualSense', price:69.99, qty:0, img:'https://static1.unieuro.it/medias/sys_master/root/h43/h42/32637772431390/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-e47ae25038b8d49b2c080efdfcaecde7-preview-sgmConversionBaseFormat-sgmProductFormat.jpg'}])


    const add = (e)=>{
        let index = products.findIndex(x => x.title === e.target.id);
        let newArray = [...products];
        newArray[index].qty = newArray[index].qty + 1;
        setProducts(newArray)
        console.log(products)
        console.log(newArray)
    }

    const substract = (e)=>{
        let index = products.findIndex(x => x.title === e.target.id);
        let newArray = [...products];
        newArray[index].qty = newArray[index].qty - 1;
        setProducts(newArray)
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Product  products={products} add={add} substract={substract}/>} />
        <Route path="/cart" element={<Cart  products={products} add={add} substract={substract}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;