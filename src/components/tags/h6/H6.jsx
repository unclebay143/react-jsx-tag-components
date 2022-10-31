export const H6 = (props) => {
    const { text, classes, styles, children } = props;
    return (
        <h5 className={classes} style={styles} {...props}>
            {children || text || 'Title 6'}
        </h5>
    );
};