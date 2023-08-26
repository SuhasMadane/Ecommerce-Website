import logo from "./logo.svg";
import "./App.css";
import HomePage from "./customer/Pages/HomePage/HomePage";
import ProductsPage from "./customer/Pages/ProductsPage";
import ProductDetails from "./customer/Components/ProductDetails/ProductDetails";
import ProductDetailsPage from "./customer/Pages/ProductDetailsPage";
import Cart from "./customer/Components/Cart/Cart";
import Checkout from "./customer/Components/CheckOut/CheckOut";
import Order from "./customer/Components/Order/Order";
import Navigation from "./customer/Components/Navigation/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <HomePage />
      <ProductsPage />
      <ProductDetailsPage />
      <Cart />
      <Checkout />
      <Order />
    </>
  );
}
export default App;
