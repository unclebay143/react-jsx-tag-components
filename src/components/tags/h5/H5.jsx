// eslint-disable-next-line
import tag_styles from './../tags.module.css';

export const H5 = (props) => {
	const { text, classes, styles, children } = props;
	return (
		<h5 className={classes} style={styles} {...props}>
			{children || text || 'Title 5'}
		</h5>
	);
};
