import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { P } from '../../../style/typography';

export const BackToArchiveBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  height: calc(5vh + 2em);
  width: 100vw;
  background-color: ${colors.CREME};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 8em;
`;

export const BackToArchiveText = styled(P)`
  letter-spacing: 0.13em;
`;

export const BackToArchiveImage = styled.img`
  height: 3em;
  width: auto;
  padding-right: 1em;
  cursor: pointer;
`;
