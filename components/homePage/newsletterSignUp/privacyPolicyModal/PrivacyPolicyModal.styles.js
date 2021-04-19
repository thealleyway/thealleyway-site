import styled from 'styled-components';
import { P } from '../../../../style/typography';
import { max } from '../../../../lib/responsive';
import { colors } from '../../../../style/colors';

export const PrivacyPolicyModalWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 70%;
  z-index: 4;

  @media ${max.desktop} {
    left: 50%;
  }

  @media ${max.tablet} {
    left: calc(50% - 190px);
  }
`;

export const PrivacyPolicyModalContentWrapper = styled.div`
  width: 375px;
  height: 450px;
  position absolute;
`;

export const PrivacyPolicyModalArch = styled.span`
  background-color: ${colors.SANDYYELLOW};
  width: 350px;
  height: 425px;
  border: 2px solid ${colors.BLACK};
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;

  position: absolute;
  right: 0;
  bottom: 0;
`;

export const PrivacyPolicyModalArchOutline = styled(PrivacyPolicyModalArch)`
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
`;

export const PrivacyPolicyModalSpark = styled.img`
  position: absolute;
  left: 150px;
  top: 80px;
  width: 100px;
  z-index: 1;
`;

export const PrivacyPolicyText = styled(P)`
  font-size: 1em;
  position: absolute;
  left: 50px;
  right: 50px;
  bottom: 28px;
  top: 200px;
  overflow: scroll;
`;

export const PrivacyPolicyModalCloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: ${colors.SANDYYELLOW};
  border: 2px solid ${colors.BLACK};
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const X = styled.img`
  width: 50%;
`;
