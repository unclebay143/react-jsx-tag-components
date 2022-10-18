// eslint-disable-next-line
import tag_styles from "./../tags.module.css";

export const H2 = (props) => {
  const { text, classes, styles, children } = props;
  return (
    <h2 className={classes} style={styles} {...props}>
      {children || text || "Title 2"}
    </h2>
  );
};
