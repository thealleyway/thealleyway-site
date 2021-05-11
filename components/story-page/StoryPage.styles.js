import styled from 'styled-components';
import { max } from '../../lib/responsive';

export const StoryPageWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  float: left;
  height: 100vh;
  display: flex;
  align-items: center;

  @media ${max.tabletLg} {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
