import { fonts, fontWeights } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';
import { icons } from '../../style/icons';
import { HoverAnimationButton } from '../animation-base-components/AnimationBaseComponents';

export const NavigationWrapper = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  width: 100%;
  padding: 2em 5em;
  z-index: 5;
  background-color: ${colors.CREME};

  @media ${max.tablet} {
    padding: 2em;
  }

  @media ${max.tabletSm} {
    padding: 1.5em;
    padding-top: 1em;
  }
`;

export const LogoWrapper = styled.div`
  font-family: ${fonts.swearDisplay};
  color: ${colors.BROWN};
  font-weight: ${fontWeights.medium};
  font-size: 1.2em;
  padding-left: 1.5em;

  &:hover {
    cursor: pointer;
  }

  @media ${max.desktop} {
    padding-left: 0em;
  }
`;

export const NavigationLinksWrapper = styled.div`
  width: min(56%, 800px);
  display: flex;
  justify-content: space-around;

  @media ${max.desktop} {
    width: 75%;
  }

  @media ${max.tabletLg} {
    display: none;
  }
`;

export const LinkWrapper = styled(HoverAnimationButton)`
  display: block;
  background: none;
  border: none;
  text-align: left;
  font-size: 1em;
  font-family: ${fonts.poppins};
  color: ${colors.BROWN};
  font-weight: ${(props) =>
    props.onPage ? fontWeights.medium : fontWeights.normal};
  text-transform: uppercase;
  letter-spacing: 0.13em;

  @media ${max.tabletLg} {
    margin-bottom: 3em;
    width: min(18em, 100%);
    font-weight: ${fontWeights.normal};
    &:hover {
      background: url(${icons.LONG_UNFILLED_SPARK_ARROW_HORIZONTAL}) no-repeat;
      background-position: right center;
      background-size: contain;
    }
    background: ${(props) =>
      props.onPage
        ? `url(${icons.LONG_UNFILLED_SPARK_ARROW_HORIZONTAL}) no-repeat`
        : `inherit`};
    background-position: center center;
    background-size: contain;
  }
`;

export const HamburgerImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: ${colors.CREME};
  border: 2px solid ${colors.BLACK};
  z-index: 15;

  @media ${max.tablet} {
    width: 100%;
  }
`;

export const HamburgerMenuContent = styled.div`
  padding: 4em;
  padding-top: 8em;
`;

export const CloseXImage = styled.img`
  position: absolute;
  width: 1.5em;
  top: 3em;
  right: 3em;
`;
