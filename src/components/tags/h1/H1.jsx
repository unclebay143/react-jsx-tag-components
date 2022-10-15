// eslint-disable-next-line
import tag_styles from "./../tags.module.css";

export const H1 = (props) => {
  const { text, classes, styles, children } = props;
  return (
    <h1 className={classes} style={styles} {...props}>
      {children || text || "Title 1"}
    </h1>
  );
};
