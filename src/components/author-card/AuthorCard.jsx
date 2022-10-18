import React from "react";
import SocialTags from "./SocialTags";

const AuthorCard = ({ author }) => {
  const { name, github_image_url, brief, socials, socials_theme } =
    author || {};
  return (
    <section className='mt-10 flex flex-col h-full shadow w-full p-5 rounded-md'>
      <section>
        <h3 className='text-md text-gray-700 font-semibold'>
          Contributor's Profile
        </h3>
      </section>
      <section className='py-4 h-full w-full align-baseline'>
        <div className='container mx-auto'>
          <div style={{ backgroundColor: "rgb(245 245 245)" }}>
            <div
              className='p-5  lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0'
              style={{ cursor: "auto" }}
            >
              <section className='group'>
                <div className='aspect-w-3 aspect-h-2'>
                  <img
                    className='object-cover shadow-lg rounded-lg group-hover:opacity-75'
                    src={
                      github_image_url || "https://stackdiary.com/140x100.png"
                    }
                    alt='Author'
                    style={{ cursor: "auto" }}
                  />
                </div>
              </section>

              <section
                className='sm:col-span-2 mt-3'
                style={{ cursor: "auto" }}
              >
                <div className='group'>
                  <h4
                    className='text-lg text-center md:text-left md:text-xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary'
                    style={{ cursor: "auto" }}
                  >
                    {name}
                  </h4>
                </div>
                {socials && (
                  <section className='my-5'>
                    <h3 className='text-md text-center md:text-left font-medium mb-3'>
                      Let's Connect 👋
                    </h3>
                    <SocialTags
                      socials={socials}
                      socials_theme={socials_theme}
                    />
                  </section>
                )}

                <div className='mt-2' style={{ cursor: "auto" }}>
                  <p
                    className='mt-1 text-sm font-normal text-skin-base leading-5'
                    style={{ cursor: "auto" }}
                  >
                    {brief}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AuthorCard;
