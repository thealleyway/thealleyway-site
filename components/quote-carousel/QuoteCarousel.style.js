import styled from 'styled-components';
import { H2, H3, P } from '../../style/typography';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';
import {
  FadeIn,
  FadeOut,
} from '../animation-base-components/AnimationBaseComponents';

const ContentWrapper = styled.div`
  width: 55em;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5em;
  margin-bottom: -2em;

  @media ${max.tabletLg} {
    flex-direction: column;
    width: clamp(20em, 80vw, 30em);
    height: 40em;
    margin-bottom: 0;
  }
  @media ${max.tablet} {
    height: 35em;
  }
`;

const TextWrapper = styled.div`
  width: 19em;

  @media ${max.tabletLg} {
    margin-bottom: 2em;
  }
  @media ${max.tabletSm} {
    width: clamp(15em, 70vw, 18em);
  }
`;

const TitleWrapper = styled(H2)`
  margin: 0;
`;

const DescriptionWrapper = styled(P)`
  color: ${colors.BROWN};
`;

const QuoteWrapper = styled(H3)`
  color: ${colors.BROWN};
  font-style: initial !important;
  margin: 0;
  padding: 0;
  padding-top: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;

  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)};
  animation-duration: 3s;
  font-size: clamp(1.4em, 6vw, 1.8em);
`;

const QuoteContainer = styled.div`
  width: 17em;
  height: 14em;
  position relative;
  left: 2em;
  bottom: 7em;
  margin-bottom: -12em;
  overflow: hidden;

  @media ${max.tabletLg} {
    left: 1em;
    height: 13em;
    width: clamp(11em, 60vw, 16.5em);
  }

  @media ${max.tabletSm} {
    left: 1em;
    bottom: 8em;
    height: 12em;
    width: 13em;
  }
`;

const CarouselContainer = styled.div`
  margin-left: -10em;
  padding: 0;
  width: 30em;
  height: 30em;

  display: flex;
  flex: 100%;
  justify-content: center;
  align-items: center;

  @media ${max.tabletLg} {
    margin-left: -20em;
  }

  @media ${max.tabletSm} {
    margin-left: -17em;
    width: clamp(16em, 80vw, 22em); //25em;;
    height: clamp(16em, 80vw, 22em); //25em;;
  }
`;

const ImageArchWrapper = styled.div`
  --arch-width: 350px;
  --arch-height: 450px;
  --off-set: 25px;
  --border-width: 2px;

  @media ${max.tabletLg} {
    --arch-width: 300px;
    --arch-height: 350px;
    margin: 0 auto;
  }

  @media ${max.tabletSm} {
    --arch-width: 250px;
    --arch-height: 300px;
  }
`;

const ImageArchContentWrapper = styled.div`
  width: calc(var(--arch-width));
  height: calc(var(--arch-height) + var(--off-set));
  position: relative;
  bottom: -200px;
  margin-bottom: -75px;
  margin-top: 0;
  left: 145px;
`;

const ArchImage = styled.span`
  background: url(${(props) => props.url});
  width: var(--arch-width);
  height: 50%;
  border: var(--border-width) solid ${colors.WHITE};
  border-top: 0;

  &:after {
    position: absolute;
    left: calc(-1 * var(--border-width));
    top: calc(-1 * (var(--arch-height) / 2) - var(--border-width));
    height: 100%;
    width: 100%;
    border-top-left-radius: calc(var(--arch-height) / 2);
    border-top-right-radius: calc(var(--arch-height) / 2);
    border: var(--border-width) solid ${colors.WHITE};
    border-bottom: 0;
    background-image: inherit;
    content: '';
  }
`;

const ArchOutline = styled(ArchImage)`
  background-color: transparent;
  position: absolute;
  left: -25px;
  bottom: 250px;

  @media ${max.tabletLg} {
    left: -20px;
    bottom: 195px;
  }

  @media ${max.tabletSm} {
    left: -15px;
    bottom: 170px;
  }
`;

const ArchSpark = styled.img`
  --spark-width: min(25%, 100px);
  position: relative;
  left: 130px;
  bottom: 200px;
  width: var(--spark-width);
  z-index: 4;

  @media ${max.tabletLg} {
    left: calc(
      (var(--arch-width) / 2) - (var(--spark-width) / 2) + var(--off-set)
    );
    bottom: 150px;
  }

  @media ${max.tablet} {
    left: calc(
      (var(--arch-width) / 2) - (var(--spark-width) / 2) + (var(--off-set) / 2)
    );
    bottom: 140px;
  }
`;

export {
  ContentWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  QuoteContainer,
  QuoteWrapper,
  CarouselContainer,
  ImageArchWrapper,
  ImageArchContentWrapper,
  ArchImage,
  ArchOutline,
  ArchSpark,
};
