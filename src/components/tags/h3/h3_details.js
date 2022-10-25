export const h3_details = {
	title: 'H3',
	codeSnippet: `
    export const H3 = (props) => {
        const { text, classes, styles, children } = props;
        return (
			<h3 className={classes} style={styles} {...props}>
				{children || text || "Title 3"}
			</h3>
		);
	};
		`,

	author: {
		name: 'Ijeoma Igboagu',
		profession: 'Front-end developer | tech communicator',
		github_image_url: 'https://github.com/ijayhub.png',
		socials: [
			{
				name: 'GitHub',
				url: 'https://github.com/ijayhub',
			},
			{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/ijeoma-igboagu/' },
			{ name: 'Twitter', url: 'https://twitter.com/ijaydimples' },
			{ name: 'Hashnode', url: 'https://ijaycent.hashnode.dev/' },
			{ name: 'Blog', url: '' },
		],
		socials_theme: {
			tailwind_bg_color: 'bg-pink-400',
			tailwind_text_color: 'text-white',
		},
	},
};
