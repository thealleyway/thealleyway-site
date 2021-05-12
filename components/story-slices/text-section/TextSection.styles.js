import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { P } from '../../../style/typography';

export const TextSectionWrapper = styled(P).attrs({
  as: 'div',
})`
  display: flex;
  align-items: ${(props) =>
    props.verticalAlignment === 'bottom'
      ? 'flex-end'
      : props.verticalAlignment === 'center'
      ? 'center'
      : 'flex-start'};
  margin: 4em;
  width: 40em;

  @media ${max.tabletLg} {
    margin: 2em;
    width: 40%;
    align-self: ${(props) =>
      props.horizontalAlignment === 'right'
        ? 'flex-end'
        : props.horizontalAlignment === 'center'
        ? 'center'
        : 'flex-start'};
  }

  @media ${max.tabletSm} {
    width: 65%;
    align-self: center;
  }
`;
