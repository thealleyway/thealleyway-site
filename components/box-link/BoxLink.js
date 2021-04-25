import { getString } from '../../lib/richText';
import {
  BoxLinkContainer,
  EllipseContainer,
  Ellipse,
  Title,
  Description,
  MediumArrow,
  LongArrow,
  InnerContentContainer,
} from './BoxLink.styles';
import { icons } from '../../style/icons';
import PageLink from '../page-link/PageLink';
import { breakpointsObj } from '../../lib/responsive';
import MediaQuery from 'react-responsive';

export default function BoxLink({ boxLinkData }) {
  const {
    box_link_title: boxLinkTitle,
    box_link_description: boxLinkDescription,
    box_link_link: boxLinkLink,
  } = boxLinkData;

  return (
    <BoxLinkContainer>
      <EllipseContainer>
        <Ellipse src={icons.DOUBLE_ELLIPSES} alt="White double ellipses" />
      </EllipseContainer>
      <InnerContentContainer>
        <Title>{getString(boxLinkTitle)}</Title>
        <Description>{getString(boxLinkDescription)}</Description>
        <MediaQuery minDeviceWidth={breakpointsObj.desktop}>
          <PageLink href={`/${boxLinkLink.uid}`}>
            <MediumArrow
              src={icons.FILLED_MEDIUM_ARROW}
              alt="Filled mauve medium arrow"
            />
          </PageLink>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={breakpointsObj.desktop - 1}>
          <PageLink href={`/${boxLinkLink.uid}`}>
            <LongArrow
              src={icons.FILLED_LONG_ARROW_MAUVE}
              alt="Filled mauve long arrow"
            />
          </PageLink>
        </MediaQuery>
      </InnerContentContainer>
    </BoxLinkContainer>
  );
}
