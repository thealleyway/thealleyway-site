import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';
import { motion } from 'framer-motion';

const OvalButtonContainer = styled(motion.div)`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;

  @media ${max.tabletLg} {
    width: 100%;
  }
`;

const Button = styled(P).attrs({
  as: 'button',
})`
  background-color: ${colors.CANVAS};
  color: ${colors.ROSEMAUVE};
  border: 2px solid ${colors.ROSEMAUVE};
  border-radius: 240%;
  width: 120px;
  height: 48px;
  text-align: center;
  letter-spacing: 0.13em;

  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.ROSEMAUVE};
    color: ${colors.FRESHSNOW};
    cursor: pointer;
  }

  @media ${max.tabletSm} {
    align-self: center;
  }

  @media ${max.tabletLg} {
    width: 90%;
  }
`;

export { Button, OvalButtonContainer };
