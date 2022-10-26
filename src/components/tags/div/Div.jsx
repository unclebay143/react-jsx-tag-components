export const Div = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<div className={classes} style={styles} {...props}>
			{children || text || 'Div Tag'}
		</div>
	);
};
