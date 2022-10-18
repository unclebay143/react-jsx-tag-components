import React from "react";
import { CodeBlock } from "../CodeBlock";

const Explainer = ({ title, subtitle, language, codeSnippet }) => {
  return (
    <section className='col-span-8'>
      <section className='shadow-md mx-8 p-5 rounded-md'>
        <h2>{title} Component</h2>
      </section>
      <section className='mt-10 flex flex-col h-full shadow mx-8 p-5 rounded-md'>
        <section>
          <h2>{title} Component</h2>
        </section>
        <section className='py-4 h-full w-full align-baseline'>
          <CodeBlock language={language} codeSnippet={codeSnippet} />
        </section>
        <section className='h-full w-full align-baseline'>
          <a href='#' className='text-sm'>
            Show on GitHub
          </a>
        </section>
      </section>
    </section>
  );
};

export default Explainer;
