export const Span = (props) => {
  const { text, classes, styles, children, ...others } = props;
  return (
    <span className={classes} style={styles} {...others}>
      {children || text || "This is a span tag"}
    </span>
  );
};
