import styled, { keyframes } from 'styled-components';

export const LeftRightAnimation = keyframes`
  from { background-position: left center };
  to { background-position: right center };
`;

export const HoverAnimationButton = styled.button`
  &:hover {
    --shadow: 0.02em;
    --neg-shadow: calc(-1 * var(--shadow));

    text-shadow: var(--neg-shadow) var(--neg-shadow) 0 ${(props) => props.color},
      var(--shadow) var(--neg-shadow) 0 ${(props) => props.color},
      var(--neg-shadow) var(--shadow) 0 ${(props) => props.color},
      var(--shadow) var(--shadow) 0 ${(props) => props.color};
    transition: all 0.5s;
  }
`;
