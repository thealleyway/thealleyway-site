import styled, { css } from 'styled-components';
import { colors } from '../../../style/colors';

const HorizontalStyling = css`
  position: absolute;
  top: calc(5vh + 2em);
`;

const VerticalStyling = css`
  position: sticky;
  top: 8%;
`;

const PercentageIndicatorStyles = css`
  height: 3px;
  background-color: ${colors.BROWN};
  width: ${(props) => `${props.readingProgress}%`};
  z-index: 20;
`;

const DefaultProgressbarStyles = css`
  height: 3px;
  background-color: ${colors.WHITE};
  width: 100%;
  z-index: 19;
`;

export const HorizontalProgressBarComponent = styled.div`
  ${HorizontalStyling}
  ${PercentageIndicatorStyles}
`;

export const HorizontalWhiteBackground = styled.div`
  ${HorizontalStyling}
  ${DefaultProgressbarStyles}
`;

export const VerticalProgressBarComponent = styled.div`
  ${VerticalStyling}
  ${PercentageIndicatorStyles}
`;

export const VerticalWhiteBackground = styled.div`
  ${VerticalStyling}
  ${DefaultProgressbarStyles}
`;
