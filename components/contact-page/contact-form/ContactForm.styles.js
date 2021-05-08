import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { motion } from 'framer-motion';

const ContactFormContainer = styled.div`
  padding-top: 6em;
  width: 70%;
  @media ${min.tablet} {
    width: 55%;
    padding-top: 9em;
  }
  @media ${min.desktop} {
    padding-top: 8em;
    padding-left: 8em;
    width: 47%;
  }
`;

const InputBoxWrapper = styled.div`
  padding-top: 0.5em;
  @media ${min.desktop} {
    padding-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.3em;
  @media ${min.tablet} {
    padding-top: 2em;
    float: right;
  }
`;

export { ContactFormContainer, InputBoxWrapper, ButtonWrapper };
