import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { sidebarLinks } from "./sidebar-links";

const Sidebar = () => {
  return (
    <aside className='h-full col-span-2'>
      <p className='mb-4 font-medium'>Table of Contents</p>
      <ul className='list-disc list-inside'>
        {sidebarLinks.map(({ label, to }) => {
          return (
            <LinksWithActiveClass key={label} to={to}>
              {label}
            </LinksWithActiveClass>
          );
        })}
      </ul>
    </aside>
  );
};

function LinksWithActiveClass({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className='px-2 mb-3 uppercase'>
      <Link
        className={`${match ? "underline text-gray-500" : "none"}`}
        to={to}
        {...props}
      >
        {children}
        {match && " 👈🏽"}
      </Link>
    </li>
  );
}

export default Sidebar;
