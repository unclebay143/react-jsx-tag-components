export const img_details = {
    title: "Img",
    codeSnippet: `
        export const Img = (props) => {
            const {alt, src, width, height, classes, styles} = props;

            return (
                <img classname={classes} style={styles} src={src} width={width} heignt={height} alt={alt} />
            );
        };
    `,

    author: {
        name: "Abdul-Rasheed Wahab",
        profession: "Software Engineer",
        github_image_url: "https://github.com/Damilola99-web.png",
        socials: [
          {
            name: "GitHub",
            url: "https://github.com/Damilola99-web",
          },
          { name: "LinkedIn", url: "https://linkedin.com/in/abdul-rasheed-wahab-92aa15214" },
          { name: "Twitter", url: "https://twitter.com/RashedWahab" },
        ],
        socials_theme: {
          tailwind_bg_color: "bg-green-500",
          tailwind_text_color: "text-white",
        },
      },
}