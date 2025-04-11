import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ManageStamps from "../components/ManageStamps";

const ManageStampPage = () => {
  return (
    <>
      <Navbar />
      <div className="manage-stamps">
      <ManageStamps />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default ManageStampPage;