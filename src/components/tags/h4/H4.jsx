export const H4 = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<h4 className={classes} style={styles} {...props}>
			{children || text || 'Title 4'}
		</h4>
	);
};
