export const H3 = (props) => {
  const { text, classes, styles, children } = props;

  return (
    <h3 className={classes} style={styles} {...props}>
      {children || text || "Title 3"}
    </h3>
  );
};
