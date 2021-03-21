import React from "react";
import { getString } from "../lib/richText";
import PageLink from "../components/PageLink";

export default function Navigation({ navigationData }) {
  const { navigation_links: navigationLinks } = navigationData;

  return (
    <nav>
      {navigationLinks.map((navigationLink, index) => (
        <NavigationLink key={index} navigationLink={navigationLink} />
      ))}
    </nav>
  );
}

function NavigationLink({ navigationLink }) {
  const { link_name: linkName, link } = navigationLink;

  switch (link.link_type) {
    case "Document":
      const href = link.uid === "home" ? "/" : `/${link.uid}`;
      return (
        <div>
          <PageLink href={href}>{getString(linkName)}</PageLink>
        </div>
      );
    case "Web":
      return (
        <a href={link.url} target="_blank">
          {getString(linkName)}
        </a>
      );
    default:
      return null;
  }
}
