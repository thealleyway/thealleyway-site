import React, { useState, useEffect } from 'react';
import { getString } from '../../lib/richText';
import PageLink from '../page-link/PageLink';
import { icons } from '../../style/icons';
import { Overlay } from '../base-components/BaseComponents';
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

const currentPage = () => {
  if (typeof window === 'object') {
    const splitUrl = window.location.href.split('/');
    return splitUrl.includes('archive')
      ? 'archive'
      : splitUrl[splitUrl.length - 1] || 'home';
  } else {
    return '';
  }
};

export default function Navigation({ navigationData }) {
  const { navigation_links: navigationLinks } = navigationData;
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [currPage, setCurrPage] = useState('home');
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  useEffect(() => {
    setCurrPage(currentPage());
  }, []);

  const getNavigationLinks = () => {
    return navigationLinks.map((navigationLink, index) => (
      <NavigationLink
        key={index}
        navigationLink={navigationLink}
        onPage={currPage == navigationLink.link.uid}
      />
    ));
  };

  return (
    <>
      <NavigationWrapper>
        <PageLink href="/" passHref>
          <LogoWrapper>The Alleyway</LogoWrapper>
        </PageLink>
        {isTabletOrMobile ? (
          <>
            <HamburgerImage
              src={icons.HAMBURGER}
              onClick={() => {
                setIsHamburgerOpen(true);
              }}
            />
            {isHamburgerOpen && (
              <HamburgerMenu>
                <HamburgerMenuContent>
                  {getNavigationLinks()}
                </HamburgerMenuContent>
                <CloseXImage
                  src={icons.CLOSE_ICON}
                  onClick={() => {
                    setIsHamburgerOpen(false);
                  }}
                />
              </HamburgerMenu>
            )}
            <Overlay showOverlay={isHamburgerOpen} />
          </>
        ) : (
          <NavigationLinksWrapper>
            {getNavigationLinks()}
          </NavigationLinksWrapper>
        )}
      </NavigationWrapper>
    </>
  );
}

function NavigationLink({ navigationLink, onPage }) {
  const { link_name: linkName, link } = navigationLink;

  switch (link.link_type) {
    case 'Document':
      return (
        <LinkWrapper onPage={onPage} selected={onPage}>
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
