import styled from 'styled-components';
import { max } from '../../../../lib/responsive';
import { P, fontWeights, fonts } from '../../../../style/typography';
import { colors } from '../../../../style/colors';
import { motion } from 'framer-motion';

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${max.tabletLg} {
    width: max(15em, 28vw);
  }

  @media ${max.tablet} {
    flex-direction: row-reverse;
    align-self: flex-start;
    padding-left: 18%;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const AuthorTextWrapper = styled.div`
  width: 65%;

  @media ${max.tablet} {
    width: auto;
    padding-right: 5%;
  }
`;

export const AuthorName = styled.h5`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.normal};
  color: ${colors.BURNTORANGE};
  font-size: 1.2em;
  margin: 0em;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.13em;
`;

export const AdditionalInfo = styled(P)`
  margin: 0em;
  color: ${colors.BROWN};
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${max.tablet} {
    font-size: 1em;
  }
`;

export const SocialMediaLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export const SocialMediaIcon = styled(motion.img)`
  width: 15%;
  height: 15%;
  margin-right: 5%;
`;

export const DonateLink = styled.a``;

export const DonateCircularText = styled.img`
  width: 85%;
  &:hover {
    cursor: pointer;
  }
`;
