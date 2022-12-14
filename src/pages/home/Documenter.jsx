import React from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import Explainer from "../../components/layout/Explainer";

export const Documenter = (props) => {
  const { componentDetails } = props;
  return (
    <div>
      <Navbar />

      <main className='xl:w-2/3 px-5 2xl:px-0 mx-auto grid grid-cols-2 md:grid-cols-12 xl:justify-center xl:items-center bg-white mt-20'>
        <Sidebar />
        <Explainer details={componentDetails} />
      </main>
    </div>
  );
};
