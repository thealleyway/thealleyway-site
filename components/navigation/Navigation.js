import React from 'react';
import { getString } from '../../lib/richText';
import PageLink from '../page-link/PageLink';

export default function Navigation({ navigationData }) {
  const { navigation_links: navigationLinks } = navigationData;

  return (
    <nav id="top">
      {navigationLinks.map((navigationLink, index) => (
        <NavigationLink key={index} navigationLink={navigationLink} />
      ))}
    </nav>
  );
}

function NavigationLink({ navigationLink }) {
  const { link_name: linkName, link } = navigationLink;

  switch (link.link_type) {
    case 'Document':
      return (
        <div>
          <PageLink href={link.uid === 'home' ? '/' : `/${link.uid}`}>
            {getString(linkName)}
          </PageLink>
        </div>
      );
    case 'Web':
      return (
        <a href={link.url} target="_blank" rel="noreferrer">
          {getString(linkName)}
        </a>
      );
    default:
      return null;
  }
}
