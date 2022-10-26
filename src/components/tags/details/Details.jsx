export const Details = (props) => {
  const { text, classes, styles, children, summary } = props;

  return (
    <details className={classes} style={styles} {...props}>
      <summary>{summary}</summary>
      {children || text || 'Details'}
    </details>
  );
};
