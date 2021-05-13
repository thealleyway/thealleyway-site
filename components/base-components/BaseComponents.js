import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

export const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.CREME};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

export const RedStar = styled.img`
  width: ${(props) => (props.biggerStar ? '3%' : '2%')};
  margin-left: ${(props) => (props.box ? '0.45em' : '0.5em')};
  margin-top: ${(props) => (props.box ? '0.44em' : 0)};
  @media ${min.desktopLg} {
    width: 0.7em;
  }
`;

export const PlaceHolder = styled.div`
  height: 500em;
`;
