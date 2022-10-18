export const h2_details = {
  title: "H2",
  codeSnippet: `
    export const H2 = (props) => {
        const { text, classes, styles, children } = props;
        return (
          <h2 className={classes} style={styles} {...props}>
            {children || text || "Title 2"}
          </h2>
        );
      };
      `,

  author: {
    name: "Ayodele Samuel Adebayo (Unclebigbay)",
    profession: "Customer Success Engineer",
    github_image_url: "https://github.com/unclebay143.png",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/unclebay143",
      },
      { name: "LinkedIn", url: "https://linkedin.com/in/unclebigbay" },
      { name: "Twitter", url: "https://twitter.com/unclebigbay143" },
      { name: "Hashnode", url: "https://hashnode.com/unclebigbay" },
      { name: "Blog", url: "https://unclebigbay.com" },
    ],
    socials_theme: {
      tailwind_bg_color: "bg-pink-400",
      tailwind_text_color: "text-white",
    },
  },
};
