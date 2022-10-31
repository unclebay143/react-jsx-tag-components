// eslint-disable-next-line
import tag_styles from './../tags.module.css';

export const Small = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<small className={classes} style={styles} {...props}>
			{children || text || 'Small'}
		</small>
	);
};
