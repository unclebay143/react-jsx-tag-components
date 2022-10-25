export const details_details = {
  title: 'Details',
  codeSnippet: `
    export const Details = (props) => {
        const { text, classes, styles, children, summary } = props;

        return (
            <details className={classes} style={styles} {...props}>
                <summary>{summary}</summary>
                {children || text || 'Details'}
            </details>
        );
    };
      `,

  author: {
    name: 'Juan Sebastian Mendoza',
    profession: 'Software Developer',
    github_image_url: 'https://github.com/JuanSebastianM.png',
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/JuanSebastianM',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/juan-sebastian-mendoza-perez/',
      },
      { name: 'Twitter', url: 'https://twitter.com/JuanMendozaDev' },
      { name: 'Hashnode', url: 'https://hashnode.com/@JuanMendozaDev' },
      { name: 'Blog', url: 'https://juansebastian.hashnode.dev' },
    ],
    socials_theme: {
      tailwind_bg_color: 'bg-pink-400',
      tailwind_text_color: 'text-white',
    },
  },
};
