import React, { useEffect } from "react";
import { CodeBlock } from "../../components/CodeBlock";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import Explainer from "../../components/tags/Explainer";

// https://open-source-ideas.github.io/
export const Documenter = ({ title, codeSnippet }) => {
  return (
    <div>
      <Navbar />

      <main className='xl:w-2/3 px-5 md:px-0 mx-auto grid grid-cols-2 md:grid-cols-12 xl:justify-center xl:items-center bg-white mt-20'>
        <Sidebar />
        <Explainer title={title} codeSnippet={codeSnippet} />
      </main>
    </div>
  );
};
