import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
