import styled, { keyframes } from 'styled-components';
import { H1, P } from '../../../style/typography';
import { max } from '../../../lib/responsive';
import { colors } from '../../../style/colors';
import { SignatureImage } from '../HomePage.styles';

export const CurrentFeaturedStoryWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
  width: 95%;
  max-width: 1050px;
  padding: min(7%, 80px);
  padding-bottom: 0px;

  @media ${max.tabletSm} {
    display: none;
  }
`;

export const CurrentFeaturedStoryImageWrapper = styled.div`
  width: min(400px, 50%);
  max-height: 450px;
  position: relative;
`;

export const CurrentFeaturedStoryImage = styled.img`
  width: 100%;
`;

export const CurrentFeaturedStoryTextWrapper = styled.div`
  width: calc(100% - min(400px, 50%));
  margin-left: 8%;
  z-index: 2;
`;

export const CurrentFeaturedStoryH1 = styled(H1)`
  color: ${colors.BLACK};
  font-size: clamp(2.5em, 3.5vw, 3.5em);
  margin-left: -260px;
  margin-bottom: 0.5em;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${max.tablet} {
    margin-bottom: 10px;
    margin-left: -150px;
  }
`;

const MoreAnimation = keyframes`
  from { background-position: left center };
  to { background-position: right center };
`;

export const CurrentFeaturedStoryButton = styled.button`
  margin: 16px 0px;
  width: min(80%, 300px);
  cursor: pointer;
  background: ${(props) => `url('${props.url}') no-repeat` || 'none'};
  background-size: 85%;
  background-position: left center;
  border: none;

  &:hover {
    animation: ${MoreAnimation} 0.8s forwards;
    --shadow: 0.35px;
    --neg-shadow: calc(-1 * var(--shadow));

    text-shadow: var(--neg-shadow) var(--neg-shadow) 0 ${colors.BROWN},
      var(--shadow) var(--neg-shadow) 0 ${colors.BROWN},
      var(--neg-shadow) var(--shadow) 0 ${colors.BROWN},
      var(--shadow) var(--shadow) 0 ${colors.BROWN};
    transition: all 0.8s;
  }

  @media ${max.tablet} {
    margin: 0px;
    width: 100%;
  }
`;

export const CurrentFeaturedStoryButtonText = styled(P)`
  color: ${colors.BROWN};
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 4px;
`;

export const PreviewText = styled(P)`
  font-size: clamp(0.6em, 2vw, 1em);
  width: min(360px, 100%);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${max.tablet} {
    margin: 0px;
  }
`;

export const CurrentFeaturedStorySignatureImage = styled(SignatureImage)`
  cursor: default;
`;
