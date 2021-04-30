import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { H4, P } from '../../../style/typography';
import {colors } from '../../../style/colors';

const StoryInquiryFormContainer = styled.div`
  padding-top: 6em;
  width: 70%;
  @media ${min.tablet} {
    width: 55%;
  }
  @media ${min.desktop} {
    padding-top: 4em;
    padding-left: 29em;
    width: 72%;
  }
`;

const ClearSignatureWrapper = styled.div`
  margin: -.5em 0;
`;

const InfoTextWrapper = styled.div`
  margin: -1.4em 0;
`;

const StoryConceptInfoTextWrapper = styled.div`
  margin: -.5em 0;
`;

const AuthorInformationContainer = styled.div`
  padding-bottom: 1em;
`;

const AuthorSignatureContainer = styled.div`
  padding-bottom: 2em;
`;

const SocialInformationContainer = styled.div`
  padding-bottom: 1em;
`;

const StoryConceptContainer = styled.div`
  padding-bottom: 1em;
`;

const ResourceLinksContainer = styled.div`
  padding-bottom: 1em;
`;

const Description = styled(P)`
  width: 80%;
`;

const InputFieldWrapper = styled.div`
  padding-bottom: 1.5em;
  font-size: 0.8em;
`;

const SignatureCanvasWrapper = styled.div`
  background-color: white;
  border: 1px solid ${colors.BROWN};
`;

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
`;

const RedStar = styled.img`
  width: 2%;
  margin-left: 0.5em;
`;

const StarLabelContainer = styled.div`
  display: flex;
  font-size: 0.8em;
  margin: 0 0 .3em 0;
`;

const SquareButtonWrapper = styled.div`
  float: right;
`;

export {
  StoryInquiryFormContainer,
  SocialInformationContainer,
  ResourceLinksContainer,
  StoryConceptContainer,
  InputFieldWrapper,
  AuthorInformationContainer,
  AuthorSignatureContainer,
  Description,
  InfoTextWrapper,
  StoryConceptInfoTextWrapper,
  SignatureCanvasWrapper,
  ClearSignatureWrapper,
  StarLabelContainer,
  RedStar,
  TextLabel,
  SquareButtonWrapper,

};
