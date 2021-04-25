import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { P, fontWeights } from '../../../style/typography';

const FooterLinkWrapper = styled(P).attrs({
  as: 'a',
})`
  color: ${colors.WHITE};

  &:hover {
    cursor: pointer;
    font-weight: ${fontWeights.bold};
  }
`;

const FooterLinkContainer = styled.div`
  margin: 0.25em;
`;

export { FooterLinkWrapper, FooterLinkContainer };
