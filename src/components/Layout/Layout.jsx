import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Neader";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
       <Footer />
    </>
  );
};

export default Layout;
