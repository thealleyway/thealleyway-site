import styled from 'styled-components';
import { H4, P } from '../../../../style/typography';
import { max } from '../../../../lib/responsive';
import { colors } from '../../../../style/colors';
import { motion } from 'framer-motion';

const ValueWrapper = styled(motion.div)`
  display: flex;
  height: 15em;
  margin-left: ${(props) =>
    props.offset ? `calc(${props.offset} * clamp(3em, 5vw, 5em))` : '0'};

  @media ${max.tabletLg} {
    height: 16em;
  }

  @media ${max.tabletSm} {
    height: clamp(18em, 110vw, 22em);
    overflow: hidden;
    margin-bottom: 1em;
  }

  @media ${max.mobile} {
    height: 23em;
    margin-bottom: 2em;
  }
`;

const ValueImage = styled.img`
  height: 13em;
  width: 13em;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: clamp(8em, 20vw, 12em);
    height: clamp(12em, 20vw, 13em);
  }

  @media ${max.tablet} {
    height: 12em;
  }

  @media ${max.tabletSm} {
    width: clamp(4em, 20vw, 8em);
    height: clamp(16em, 90vw, 18em);
  }

  @media ${max.mobile} {
    height: 20em;
  }
`;

const ValueTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4em;

  @media ${max.tabletLg} {
    margin-top: -1em;
    margin-left: clamp(1em, 5vw, 4em);
  }

  @media ${max.tablet} {
    height: auto;
    padding: 0;
  }
`;

const ValueTitleWrapper = styled(H4)`
  color: ${colors.NIGHTSKY};
  margin-bottom: 0;
`;

const ValueDescriptionWrapper = styled(P)`
  width: 28em;
  height: 10em;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: -1em 0;

  @media ${max.tabletLg} {
    height: 13em;
    overflow: visible;
    width: clamp(20em, 45vw, 27em);
  }

  @media ${max.tablet} {
    width: clamp(20em, 65vw, 29em);
  }

  @media ${max.tabletSm} {
    width: auto;
    margin-top: -0.5em;
    margin-right: clamp(1em, 12vw, 3em);
    height: fit-content;
  }

  @media ${max.mobile} {
    height: 21em;
  }
`;

export {
  ValueWrapper,
  ValueImage,
  ValueTextWrapper,
  ValueTitleWrapper,
  ValueDescriptionWrapper,
};
