import styled from 'styled-components';
import { max } from '../../../lib/responsive';

export const TextSectionWrapper = styled.div`
  display: flex;
  align-items: ${(props) =>
    props.alignment === 'top'
      ? 'flex-start'
      : props.alignment === 'center'
      ? 'center'
      : 'flex-end'};
  margin: 4em;
  width: 25em;

  @media ${max.tabletLg} {
    width: 50%;
  }

  @media ${max.tabletSm} {
    width: 65%;
  }
`;
