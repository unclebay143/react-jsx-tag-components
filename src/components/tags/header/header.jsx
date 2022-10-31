export const header = (props) => {
    const { text, classes, styles, children } = props;
    return (
        <section className={header} style={styles} {...props}>
            {children || text || 'Title 6'}
        </section>
    );
};