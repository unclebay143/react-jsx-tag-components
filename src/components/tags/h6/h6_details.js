export const h6_details = {
	title: 'H6',
	codeSnippet: `
    export const H6 = (props) => {
        const { text, classes, styles, children } = props;
        return (
			<h6 className={classes} style={styles} {...props}>
				{children || text || "Title 6"}
			</h6>
		);
	};
		`,

	author: {
		name: 'Kehinde Ridwan Onifade',
		profession: 'Fullstack developer',
		github_image_url: 'https://github.com/kendoriddy.png',
		socials: [
			{
				name: 'GitHub',
				url: 'https://github.com/kendoriddy',
			},
			{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/kehindeonifade/' },
			{ name: 'Twitter', url: 'https://twitter.com/RideOnOne09' },
			{ name: 'Medium', url: 'https://hashnode.com/@RideOnOne' },
			{ name: 'Blog', url: 'https://medium.com/@onifkay' },
		],
		socials_theme: {
			tailwind_bg_color: 'bg-blue-400',
			tailwind_text_color: 'text-white',
		},
	},
};
