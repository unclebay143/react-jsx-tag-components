export const h2_details = {
  title: "H2 Component",
  codeSnippet: `
    export const H2 = (props) => {
        const { text, classes, styles, children } = props;
        return (
          <h2 className={classes} style={styles} {...props}>
            {children || text || "Title 2"}
          </h2>
        );
      };
      `,
};
