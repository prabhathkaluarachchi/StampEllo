import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import StampForm from "../components/StampForm";

const AddStampPage = () => {
  return (
    <>
      <Navbar />
      <div className="add-stamp-page">
        <StampForm />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default AddStampPage;
