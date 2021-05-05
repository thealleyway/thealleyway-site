import styled from 'styled-components';
import { H3, P, fontWeights } from '../../../style/typography';
import { max } from '../../../lib/responsive';
import { colors } from '../../../style/colors';
import { STORY_SPACING } from '../StoryArchivePage.style';

const STORY_PREVIEW_DIMENSION = {
  width: 'clamp(18.5em, 20vw, 19em)',
  height: 'clamp(20em, 25vw, 22em)',
  width_mobile: 'clamp(8.5em, 40vw, 10em)',
  height_mobile: 'clamp(10em, 45vw, 11em)',
};

const StoryPreviewContainer = styled.div`
  position: relative;
  color: ${colors.WHITE};
  width: ${STORY_PREVIEW_DIMENSION.width};
  height: ${STORY_PREVIEW_DIMENSION.height};
  margin: 0 ${STORY_SPACING}px calc(${STORY_SPACING}px * 1.5) ${STORY_SPACING}px;

  @media only screen and ${max.tabletLg} {
    margin: 0 calc(${STORY_SPACING}px / 2) ${STORY_SPACING}px
      calc(${STORY_SPACING}px / 2);
  }

  @media only screen and ${max.tabletSm} {
    width: ${STORY_PREVIEW_DIMENSION.width_mobile};
    height: ${STORY_PREVIEW_DIMENSION.height_mobile};
    margin: 0 calc(${STORY_SPACING}px / 6) calc(${STORY_SPACING}px / 3)
      calc(${STORY_SPACING}px / 6);
  }

  &:hover {
    cursor: pointer;
  }
`;

const StoryPreviewImage = styled.img`
  width: ${STORY_PREVIEW_DIMENSION.width};
  height: ${STORY_PREVIEW_DIMENSION.height};
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  ${StoryPreviewContainer}:hover & {
    -webkit-filter: none;
    filter: none;
  }

  @media only screen and ${max.tabletLg} {
    -webkit-filter: none;
    filter: none;
  }

  @media only screen and ${max.tabletSm} {
    width: ${STORY_PREVIEW_DIMENSION.width_mobile};
    height: ${STORY_PREVIEW_DIMENSION.height_mobile};
  }
`;

const StoryPreviewTitle = styled(H3)`
  position: absolute;
  font-size: clamp(1.5em, 6vw, 2em);
  bottom: 1vh;
  padding: 0 10%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and ${max.tabletSm} {
    bottom: 0vh;
  }
`;

const StoryPreviewArrow = styled.img`
  width: 75px;
  @media only screen and ${max.tabletSm} {
    width: 60px;
  }
`;

const StoryPreviewHover = styled.div`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
  width: 100%;

  ${StoryPreviewContainer}:hover & {
    position: absolute !important;
    top: 0px !important;
    left: 0px !important;
  }

  @media only screen and ${max.tabletLg} {
    position: absolute !important;
    top: 0px !important;
    left: 0px !important;
  }
`;

const StoryPreviewSignature = styled.img`
  position: relative;
  top: 8vh;
  margin: 0 auto 0 auto;
  display: block;
  width: 80%;

  @media only screen and ${max.tabletLg} {
    visible: hidden;
  }
`;

const DateArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1vh;
  padding: 0 10%;
`;

const DateWrapper = styled(P)`
  font-weight: ${fontWeights.bold};

  @media only screen and ${max.tablet} {
    font-weight: ${fontWeights.normal};
  }
`;

export {
  StoryPreviewContainer,
  StoryPreviewImage,
  StoryPreviewTitle,
  StoryPreviewArrow,
  StoryPreviewSignature,
  StoryPreviewHover,
  DateArrowWrapper,
  DateWrapper,
};
