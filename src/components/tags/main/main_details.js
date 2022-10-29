export const main_details = {
  title: "Main",
  codeSnippet: `
  export const Main = (props) => {
    const { text, classes, styles, children, ...others } = props;
    return (
      <main className={classes} style={styles} {...others}>
        {children || text || "This is a main tag"}
      </main>
    );
  };  
  `,

  author: {
    name: "Ridwan Abiola",
    profession: "Frontend Engineer",
    github_image_url: "https://github.com/abu-hasib.png",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/abu-hasib",
      },
      { name: "LinkedIn", url: "https://linkedin.com/in/ridwan-abiola" },
      // { name: "Twitter", url: "https://twitter.com/unclebigbay143" },
      { name: "Hashnode", url: "https://ridwanabiola.hashnode.dev/" },
      { name: "Blog", url: "https://ridwanabiola.netlify.app/" },
    ],
    socials_theme: {
      tailwind_bg_color: "bg-[#a973ad]",
      tailwind_text_color: "text-white",
    },
  },
};
