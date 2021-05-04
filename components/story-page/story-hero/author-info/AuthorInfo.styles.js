import styled from 'styled-components';
import { max } from '../../../../lib/responsive';
import { P, fontWeights, fonts } from '../../../../style/typography';
import { colors } from '../../../../style/colors';

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${max.tabletLg} {
    width: 28vw;
  }

  @media ${max.tabletSm} {
    flex-direction: row-reverse;
    align-self: flex-start;
    padding-left: 25%;
    width: 100%;
  }
`;

export const AuthorName = styled.h5`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.normal};
  color: ${colors.BURNTORANGE};
  font-size: clamp(1em, 1.2vw, 1.2em);
  margin: 0em;

  @media ${max.tabletSm} {
    font-size: 3.5vw;
  }
`;

export const AdditionalInfo = styled(P)`
  margin: 0em;
  color: ${colors.BROWN};
  font-size: clamp(0.7em, 0.9vw, 1em);

  @media ${max.tabletSm} {
    font-size: 2.5vw;
  }
`;

export const SocialMediaLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 15%;
  height: 15%;
  margin-right: 5%;

  @media ${max.tabletSm} {
    width: 10%;
    height: 10%;
  }
`;

export const DonateLink = styled.a`
  @media ${max.tabletSm} {
    padding-left: 5%;
  }
`;

export const DonateCircularText = styled.img`
  width: 70%;
  &:hover {
    cursor: pointer;
  }
`;
