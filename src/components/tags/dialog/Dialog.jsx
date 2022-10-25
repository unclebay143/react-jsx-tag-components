export const Dialog = (props) => {
  const { text, classes, styles, children, isOpen } = props;

  return (
    <dialog open={isOpen} className={classes} style={styles} {...props}>
      {children || text || "Dialog"}
    </dialog>
  );
};
