import tag_styles from "./../tags.module.css";

export const Img = (props) => {
    const {alt, src, width, height, classes, styles} = props;
    return (
        <img classname={classes} style={styles} src={src} width={width} heignt={height} alt={alt} />
    )
}