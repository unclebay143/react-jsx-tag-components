// eslint-disable-next-line
import tag_styles from './../tags.module.css';

export const Form = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<small className={classes} style={styles} {...props}>
			{children || text || 'Form'}
		</small>
	);
};
