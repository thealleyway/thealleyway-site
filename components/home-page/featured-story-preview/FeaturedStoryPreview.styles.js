import styled from 'styled-components';
import { max, min } from '../../../lib/responsive';
import { H1, P } from '../../../style/typography';
import { colors } from '../../../style/colors';

export const FeaturedStoryPreviewWrapper = styled.div`
  position: relative;
  width: min(30%, 300px);

  @media ${max.tabletSm} {
    width: 100%;
    margin-top: 15%;
    margin-right: 15%;
  }
`;

export const PreviewImage = styled.img`
  position: relative;
  width: 100%;
  max-height: 330px;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  filter: ${(props) => props.active || 'grayscale(100%)'};
  &:hover {
    filter: grayscale(0%);
  }

  @media ${max.tabletSm} {
    max-height: 120%;
    filter: grayscale(0%);
  }
`;

export const DoubleArchways = styled.img`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  width: 85%;
  position: absolute;
  left: 7.5%;
  bottom: 7.5%;
  z-index: 1;
  cursor: pointer;

  ${PreviewImage}:hover + & {
    display: flex;

    @media ${max.tabletSm} {
      display: none;
    }
  }

  @media ${max.tabletSm} {
    display: none;
  }
`;

// Below only for mobile
export const FeaturedStoryPreviewTitle = styled(H1)`
  font-size: 2.5em;
  color: ${colors.BLACK};
  position: absolute;
  top: 0;
  left: 8%;
  cursor: pointer;

  @media ${min.tabletSm} {
    display: none;
  }
`;

export const FeaturedStoryPreviewText = styled(P)`
  color: ${colors.BLACK};
  position: absolute;
  top: 25%;
  left: 20%;
  right: -10%;
  cursor: pointer;

  @media ${min.tabletSm} {
    display: none;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 10%;
  right: 10%;
  cursor: pointer;

  @media ${min.tabletSm} {
    display: none;
  }
`;
