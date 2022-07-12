import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import Home from "../views/Home";
import Product from "../views/Product";
import Contact from "../views/Contact/index'";
import FullInfoProduct from "../views/FullInfoProduct";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="FullInfoProduct/:id" element={<FullInfoProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
