import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { H3, P } from '../../../style/typography';

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


const InputBoxWrapper = styled.div`
  height: 50%:
`;

const Description = styled(P)`
  width: 80%;
`;

const InputFieldWrapper = styled.div`
  padding-bottom: 1.5em;
  font-size: .8em;
`;

export { StoryInquiryFormContainer, SocialInformationContainer, ResourceLinksContainer, StoryConceptContainer, InputBoxWrapper, InputFieldWrapper, AuthorInformationContainer, AuthorSignatureContainer, Description }