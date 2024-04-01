import { GlobalStyle } from "./style/GlobalStyle";
import {
  Home,
  Contact,
  Help,
  MyRoutes,
  ProductDetail,
  CategoryProduct,
  Cart
} from "./components/Index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* Global Style */}
      <GlobalStyle />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<MyRoutes />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="category/:category" element={<CategoryProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
