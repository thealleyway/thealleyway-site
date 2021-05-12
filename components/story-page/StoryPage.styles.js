import styled from 'styled-components';
import { max } from '../../lib/responsive';

export const StoryPageWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  float: left;
  height: 100vh;
  align-items: center;
  padding-top: 5vh;

  @media ${max.tabletLg} {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
