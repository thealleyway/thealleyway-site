import styled, { keyframes } from 'styled-components';

export const LeftRightAnimation = keyframes`
  from { background-position: left center };
  to { background-position: right center };
`;

export const TopBottomAnimation = keyframes`
  from { background-position: 0 0% };
  to { background-position: 0 100%};
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const HoverAnimationButton = styled.button`
  &:hover {
    --shadow: ${(props) => (props.selected ? '0' : '0.02em')};
    --neg-shadow: calc(-1 * var(--shadow));

    text-shadow: var(--neg-shadow) var(--neg-shadow) 0 ${(props) => props.color},
      var(--shadow) var(--neg-shadow) 0 ${(props) => props.color},
      var(--neg-shadow) var(--shadow) 0 ${(props) => props.color},
      var(--shadow) var(--shadow) 0 ${(props) => props.color};
    transition: all 0.5s;
  }
`;
