import styled from 'styled-components';
import { max } from '../../lib/responsive';

export const StoryPageWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  float: left;
  height: 90vh;
  display: flex;

  @media ${max.tabletLg} {
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;
