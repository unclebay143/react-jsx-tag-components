const SocialTags = ({ socials, socials_theme }) => {
  const { tailwind_bg_color, tailwind_text_color } = socials_theme || {};
  return (
    <div className='flex items-center space-x-3 my-2'>
      <div className='flex items-center flex-wrap gap-2 space-x-2'>
        {socials?.map(({ name, url }) => {
          return (
            <a
              href={url}
              target='_blank'
              className={`inline-flex ${tailwind_bg_color} ${tailwind_text_color} items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input`}
            >
              <svg
                className='mr-1.5 h-2 w-2 brand-react'
                fill='currentColor'
                viewBox='0 0 8 8'
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialTags;
