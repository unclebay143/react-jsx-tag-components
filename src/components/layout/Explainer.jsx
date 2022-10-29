import React from "react";
import ThemeContext from "../../context/ThemeContext";
import AuthorCard from "../author-card/AuthorCard";
import { CodeBlock } from "../codehighlight/CodeBlock";

const Explainer = ({ details }) => {
  const { title, subtitle, language, codeSnippet, githubURL, author } = details;
  const { currentTheme } = React.useContext(ThemeContext);
  return (
    <section className={`${currentTheme === 'light' ? 'col-span-10 2xl:col-span-8 md:pl-20 bg-black text-white' : 'col-span-10 2xl:col-span-8 md:pl-20 bg-white text-black'}`}>
      <section className={`${currentTheme === 'light' ? 'w-full p-5 rounded-md shadow-[#262626] shadow-md bg-black text-white' : 'w-full p-5 rounded-md shadow-md bg-white text-black'}`}>
        <h2 className='text-lg font-semibold'>
          <span className='font-bold'>{title}</span> - JSX Tag Component
        </h2>
      </section>
      <section className={`${currentTheme === 'light' ? 'mt-10 flex flex-col h-full shadow-[#262626] shadow-md w-full p-5 rounded-md' : 'mt-10 flex flex-col h-full shadow w-full p-5 rounded-md'}`}>
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
