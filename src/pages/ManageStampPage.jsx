import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ManageStamps from "../components/ManageStamps";

const AddStampPage = () => {
  return (
    <>
      <Navbar />
      <div className="add-stamp-page">
      <ManageStamps />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default AddStampPage;