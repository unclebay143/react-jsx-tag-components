export const P = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<p className={classes} style={styles} {...props}>
			{children || text || 'Paragraph'}
		</p>
	);
};
