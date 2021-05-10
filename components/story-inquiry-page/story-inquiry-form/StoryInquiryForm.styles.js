import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { P } from '../../../style/typography';
import { colors } from '../../../style/colors';

const StoryInquiryFormContainer = styled.div`
  padding-top: 3em;
  width: 85%;
  padding-left: 4em;
  @media ${min.tablet} {
    width: 80%;
    padding-left: 10em;
  }
  @media ${min.desktop} {
    padding-top: 4em;
    padding-left: 29em;
    width: 72%;
  }
`;

const ClearSignatureWrapper = styled.div`
  margin: -0.5em 0;
`;

const StoryConceptInfoTextWrapper = styled.div`
  margin: 1em 0;
  @media ${min.tabletSm} {
    margin: -0.5em 0;
  }
`;

const AuthorInformationContainer = styled.div`
  padding-bottom: 2.7em;
  @media ${min.tablet} {
    padding-bottom: 3.5em;
  }
  @media ${min.desktop} {
    padding-bottom: 1.5em 0 2.6em 0;
  }
`;

const AuthorSignatureContainer = styled.div`
  padding-bottom: 2.7em;
  @media ${min.tablet} {
    padding-bottom: 4em;
  }
  @media ${min.desktop} {
    padding-bottom: 4em;
  }
`;

const SocialInformationContainer = styled.div`
  padding-bottom: 3.7em;
  @media ${min.tablet} {
    padding-bottom: 3.5em;
  }
  @media ${min.desktop} {
    padding-bottom: 2.6em;
  }
`;

const StoryConceptContainer = styled.div`
  padding-bottom: 3.5em;
  @media ${min.tablet} {
    padding-bottom: 3.5em;
  }
  @media ${min.desktop} {
    padding-bottom: 2.6em;
  }
`;

const ResourceLinksContainer = styled.div`
  padding-bottom: 1em;
`;

const Description = styled(P)`
  width: 100%;
  @media ${min.tablet} {
    width: 80%;
  }
`;

const InputFieldWrapper = styled.div`
  padding-bottom: 1.5em;
`;

const SocialInfoTextWrapper = styled.div`
  margin-top: -3.8em;
`;

const SignatureCanvasWrapper = styled.div`
  background-color: ${colors.BLACK};
  border: 1px solid ${colors.BROWN};
`;

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
`;

const StarLabelContainer = styled.div`
  display: flex;
  font-size: 0.8em;
  margin: 0 0 0.3em 0;
`;

const SquareButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${min.tablet} {
    float: right;
    margin: -0.3em 0 0 0;
  }
`;

const ErrorText = styled(P)`
  position: absolute;
  color: ${colors.RED};
  font-size: 0.7em;
  margin: 0.5em 0 0 0;
  text-shadow: 0.5px 0 ${colors.RED};
  letter-spacing: 0.05em;
`;

const ScrollToSubmissionForm = styled.div`
  position: absolute;
  margin-top: -3em;
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
  StoryConceptInfoTextWrapper,
  SignatureCanvasWrapper,
  ClearSignatureWrapper,
  StarLabelContainer,
  TextLabel,
  SquareButtonWrapper,
  SocialInfoTextWrapper,
  ErrorText,
  ScrollToSubmissionForm,
};
