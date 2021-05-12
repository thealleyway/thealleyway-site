import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { motion } from 'framer-motion';

const FaqContainer = styled(motion.div)`
  margin: 8em 3.5em 0 4em;
  padding-bottom: 2.5em;
  @media ${min.tablet} {
    margin: 8em 0 0 3.5em;
  }
  @media ${min.tabletLg} {
    margin: 10em 0 0 3.5em;
  }
  @media ${min.desktop} {
    margin: 9em 0 0 16.5em;
    padding-bottom: 1.5em;
  }
`;

const SparkArrowContainer = styled.div`
  position: absolute;
  display: none;
  @media ${min.desktop} {
    display: block;
    margin: 11.3em 0 0 10.9em;
  }
`;

const QuestionAnswerContainer = styled.div`
  @media ${min.tablet} {
    display: flex;
  }
`;

const QuestionContainer = styled.div`
  @media ${min.tablet} {
    width: 40%;
  }
`;

const AnswerContainer = styled.div`
  display: none;
  @media ${min.tablet} {
    display: block;
    width: 60%;
    margin: 0 2.5em 0 4em;
  }
  @media ${min.desktop} {
    width: 38%;
    margin: 0 5em 0 4em;
  }
`;

const ScrollToFaq = styled.div`
  margin-top: 1em;
`;

export {
  FaqContainer,
  QuestionAnswerContainer,
  QuestionContainer,
  AnswerContainer,
  ScrollToFaq,
  SparkArrowContainer,
};
