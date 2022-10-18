import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { sidebarLinks } from "./sidebar-links";

const Sidebar = () => {
  return (
    <aside className='col-span-2 h-full'>
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
    <li className='mb-3 px-2 uppercase'>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
