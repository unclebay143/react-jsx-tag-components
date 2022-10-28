export const Br = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<br className={classes} style={styles} {...props}>
			{children || text || 'Break'}
		</br>
	);
};
