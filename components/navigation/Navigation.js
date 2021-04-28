import React, { useState } from 'react';
import { getString } from '../../lib/richText';
import PageLink from '../page-link/PageLink';
import { icons } from '../../style/icons';
import {
  CloseXImage,
  HamburgerImage,
  HamburgerMenu,
  HamburgerMenuContent,
  LinkWrapper,
  LogoWrapper,
  NavigationLinksWrapper,
  NavigationWrapper,
} from './Navigation.styles';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

export default function Navigation({ navigationData }) {
  const { navigation_links: navigationLinks } = navigationData;
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <>
      <NavigationWrapper id="top">
        <PageLink href="/" passHref>
          <LogoWrapper>The Alleyway</LogoWrapper>
        </PageLink>
        {isTabletOrMobile ? (
          <>
            <HamburgerImage
              src={icons.HAMBURGER}
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setIsHamburgerOpen(true);
              }}
            />
            {isHamburgerOpen && (
              <HamburgerMenu>
                <HamburgerMenuContent>
                  {navigationLinks.map((navigationLink, index) => (
                    <NavigationLink
                      key={index}
                      navigationLink={navigationLink}
                    />
                  ))}
                </HamburgerMenuContent>
                <CloseXImage
                  src={icons.CLOSE_ICON}
                  onClick={() => {
                    document.body.style.overflow = 'visible';
                    setIsHamburgerOpen(false);
                  }}
                />
              </HamburgerMenu>
            )}
          </>
        ) : (
          <NavigationLinksWrapper>
            {navigationLinks.map((navigationLink, index) => (
              <NavigationLink key={index} navigationLink={navigationLink} />
            ))}
          </NavigationLinksWrapper>
        )}
      </NavigationWrapper>
    </>
  );
}

function NavigationLink({ navigationLink }) {
  const { link_name: linkName, link } = navigationLink;

  switch (link.link_type) {
    case 'Document':
      return (
        <LinkWrapper>
          <PageLink href={link.uid === 'home' ? '/' : `/${link.uid}`}>
            {getString(linkName)}
          </PageLink>
        </LinkWrapper>
      );
    case 'Web':
      return (
        <LinkWrapper>
          <a href={link.url} target="_blank" rel="noreferrer">
            {getString(linkName)}
          </a>
        </LinkWrapper>
      );
    default:
      return null;
  }
}
