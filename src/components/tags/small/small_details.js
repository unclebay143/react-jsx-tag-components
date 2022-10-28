export const small_details = {
	title: 'Small',
	codeSnippet: `
    export const small = (props) => {
        const { text, classes, styles, children } = props;
        return (
			<small className={classes} style={styles} {...props}>
				{children || text || "Small"}
			</small>
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
