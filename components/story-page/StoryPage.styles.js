import styled from 'styled-components';
import { max } from '../../lib/responsive';

export const StoryPageWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  float: left;
  height: 100vh;
  align-items: center;

  @media ${max.tabletLg} {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const HorizontalContentContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
