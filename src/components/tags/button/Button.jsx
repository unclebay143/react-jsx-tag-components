// eslint-disable-next-line
import tag_styles from './../tags.module.css';

export const Button = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<button className={classes} style={styles} {...props}>
			{children || text || 'Button'}
		</button>
	);
};
