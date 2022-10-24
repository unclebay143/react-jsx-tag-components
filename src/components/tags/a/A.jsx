export const A = (props) => {
  const { text, classes, styles, children, url } = props;

  return (
    <a className={classes} style={styles} href={url} {...props}>
      {children || text || "Link"}
    </a>
  );
};
