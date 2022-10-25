export const h4_details = {
	title: 'H4',
	codeSnippet: `
    export const H4 = (props) => {
        const { text, classes, styles, children } = props;
        return (
            <h4 className={classes} style={styles} {...props}>
                {children || text || 'Title 4'}
            </h4>
        );
    }; 
         `,

	author: {
		name: 'Godswill Udoh',
		profession: 'Frontend Developer',
		github_image_url: 'https://github.com/godswilludoh.png',
		socials: [
			{
				name: 'GitHub',
				url: 'https://github.com/godswilludoh',
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/godswill-udoh-832aba141/',
			},
			{ name: 'Twitter', url: 'https://twitter.com/officialgodswil' },
			{ name: 'Hashnode', url: 'https://hashnode.com/@godswilludoh' },
			{ name: 'Blog', url: 'https://godswilludoh.substack.com/' },
		],
		socials_theme: {
			tailwind_bg_color: 'bg-blue-400',
			tailwind_text_color: 'text-white',
		},
	},
};
