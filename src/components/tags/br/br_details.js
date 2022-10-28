export const br_details = {
	title: 'Br',
	codeSnippet: `
    export const Br = (props) => {
        const { text, classes, styles, children } = props;
        return (
            <br className={classes} style={styles} {...props}>
                {children || text || 'Break'}
            </br>
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
			tailwind_bg_color: 'bg-rose-400',
			tailwind_text_color: 'text-white',
		},
	},
};
