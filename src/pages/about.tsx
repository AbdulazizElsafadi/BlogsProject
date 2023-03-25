import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const about = () => {
  return (
    <div>
      <Header />
      <hr className="border-3 border-black w-screen" />
      <h1 className="m-10 text-center font-serif text-4xl">About Page</h1>
      <Footer />
    </div>
  );
};

export default about;
