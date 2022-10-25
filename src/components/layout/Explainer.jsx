import React from "react";
import AuthorCard from "../author-card/AuthorCard";
import { CodeBlock } from "../codehighlight/CodeBlock";

const Explainer = ({ details }) => {
  const { title, subtitle, language, codeSnippet, githubURL, author } = details;

  return (
    <section className='col-span-10 2xl:col-span-8 md:pl-20'>
      <section className='shadow-md w-full p-5 rounded-md'>
        <h2 className='text-lg font-semibold'>
          <span className='font-bold'>{title}</span> - JSX Tag Component
        </h2>
      </section>
      <section className='mt-10 flex flex-col h-full shadow w-full p-5 rounded-md'>
        {/* <section>
          <h3 className='text-md text-gray-700 font-semibold'>
            {title} Component
          </h3>
        </section> */}
        <section className='py-4 h-full w-full align-baseline'>
          <CodeBlock language={language} codeSnippet={codeSnippet} />
        </section>
        <section className='h-full w-full align-baseline'>
          <a
            href={`https://github.com/unclebay143/react-jsx-tag-components/tree/main/src/components/tags/${title.toLowerCase()}`}
            className='text-sm underline'
            target={"_blank"}
            rel='noreferrer noopener'
          >
            Show on GitHub
          </a>
        </section>
      </section>
      {/* Contributor Card */}
      <AuthorCard author={author} />
    </section>
  );
};

export default Explainer;
