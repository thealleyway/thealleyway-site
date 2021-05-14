import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { P } from '../../../style/typography';
import { motion } from 'framer-motion';

export const HalfImageHalfTextWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 52em;
  flex-direction ${(props) =>
    props.arrangement ? 'column-reverse' : 'column'};
  padding: 4em;

  @media ${max.tabletLg} {
    justify-content: space-between;
    flex-direction ${(props) =>
      props.tabletArrangement ? 'row-reverse' : 'row'};
  }
  @media ${max.tabletSm} {
    flex-direction ${(props) =>
      props.arrangement ? 'column-reverse' : 'column'};
    padding: 2em;
  }
`;

export const TextWrapper = styled(P).attrs({
  as: 'div',
})`
  max-width: 50em;
  padding-top: ${(props) => !props.arrangement && '4em'};
  padding-bottom: ${(props) => props.arrangement && '4em'};
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${max.tabletLg} {
    padding-top: 0;
    width: 48%;
  }

  @media ${max.tabletSm} {
    width: 100%;
    padding-bottom: 2em;
  }
`;

export const Image = styled(motion.img)`
  height: 46%;
  max-width: 50em;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: 48%;
    height: auto;
  }
  @media ${max.tabletSm} {
    width: 100%;
    padding-bottom: 2em;
  }
`;
