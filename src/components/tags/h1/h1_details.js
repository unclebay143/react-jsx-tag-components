export const h1_details = {
  title: "H1 Component",
  codeSnippet: `
    export const H1 = (props) => {
        const { text, classes, styles, children } = props;
        return (
          <h1 className={classes} style={styles} {...props}>
            {children || text || "Title 1"}
          </h1>
        );
      };
      `,
};
