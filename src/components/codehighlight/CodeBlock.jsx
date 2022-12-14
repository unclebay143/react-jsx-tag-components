import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export const CodeBlock = ({ language, codeSnippet }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeSnippet}
      language={language || "jsx"}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} overflow-x-scroll`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
