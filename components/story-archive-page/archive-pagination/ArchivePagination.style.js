import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { motion } from 'framer-motion';

const ArchiveArrow = styled.img`
  width: 2em;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? '0.50' : '1')};
  transform: ${(props) =>
    props.previous ? 'rotate(-90deg)' : 'rotate(90deg)'};

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media only screen and ${max.tabletLg} {
    width: 2.5em;
  }

  @media only screen and ${max.tabletSm} {
    width: 2em;
  }
`;

const PaginationWrapper = styled(motion.div)`
  width: 20em;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: -5px;
`;

export { ArchiveArrow, PaginationWrapper };
