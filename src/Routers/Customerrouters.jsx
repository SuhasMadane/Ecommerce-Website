import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Navigation from "../customer/Components/Navigation/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import Footer from "../customer/Components/Footer/Footer";
import Product from "../customer/Components/Product/Product";

const Customerrouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThre"
          element={<Product />}
        ></Route>

        {/* <ProductsPage /> */}
        {/* <ProductDetailsPage /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Customerrouters;
