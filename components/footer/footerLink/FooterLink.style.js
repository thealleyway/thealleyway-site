import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { P } from '../../../style/typography';

const FooterLinkWrapper = styled(P).attrs({
  as: 'a',
})`
  color: ${colors.WHITE};
`;

const FooterLinkContainer = styled.div`
  margin: 0.25em;
  &:hover {
    cursor: pointer;
  }
`;

export { FooterLinkWrapper, FooterLinkContainer };
