export const aside = (props) => {
  const { text, classes, styles, children, ...others } = props;
  return (
    <aside className={classes} style={styles} {...others}>
      {children || text || "This is an aside tag"}
    </aside>
  );
};
