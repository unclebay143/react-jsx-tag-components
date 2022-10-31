export const Section = (props) => {
  const { text, classes, styles, children, ...others } = props;
  return (
    <section className={classes} style={styles} {...others}>
      <h1>This is a section tag</h1>
      {children || text}
    </section>
  );
};
