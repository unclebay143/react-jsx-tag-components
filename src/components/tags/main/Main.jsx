export const Main = (props) => {
  const { text, classes, styles, children, ...others } = props;
  return (
    <main className={classes} style={styles} {...others}>
      {children || text || "This is a main tag"}
    </main>
  );
};
