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
  MediumArrowContainer,
  LongArrowContainer,
} from './BoxLink.styles';
import { icons } from '../../style/icons';
import PageLink from '../page-link/PageLink';
import { breakpointsObj } from '../../lib/responsive';
import MediaQuery from 'react-responsive';
import { useSpring } from 'react-spring';

export default function BoxLink({ boxLinkData }) {
  const {
    box_link_title: boxLinkTitle,
    box_link_description: boxLinkDescription,
    box_link_link: boxLinkLink,
  } = boxLinkData;

  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  return (
    <BoxLinkContainer>
      <EllipseContainer>
        <Ellipse src={icons.DOUBLE_ELLIPSES} alt="White double ellipses" />
      </EllipseContainer>
      <InnerContentContainer>
        <Title>{getString(boxLinkTitle).toUpperCase()}</Title>
        <Description>{getString(boxLinkDescription)}</Description>
        <MediumArrowContainer
          onMouseEnter={() => set({ x: 100 })}
          onMouseLeave={() => set({ x: 0 })}
        >
          <MediaQuery minDeviceWidth={breakpointsObj.tabletLg}>
            <PageLink href={`/${boxLinkLink.uid}`}>
              <MediumArrow
                src={icons.FILLED_MEDIUM_ARROW}
                alt="Filled mauve medium arrow"
                style={{ transform: x.interpolate((v) => `translateX(${v}%`) }}
              />
            </PageLink>
          </MediaQuery>
        </MediumArrowContainer>
        <LongArrowContainer onClick={() => set({ x: 0 })}>
          <MediaQuery maxDeviceWidth={breakpointsObj.tabletLg - 1}>
            <PageLink href={`/${boxLinkLink.uid}`}>
              <LongArrow
                src={icons.FILLED_LONG_ARROW_MAUVE}
                alt="Filled mauve long arrow"
              />
            </PageLink>
          </MediaQuery>
        </LongArrowContainer>
      </InnerContentContainer>
    </BoxLinkContainer>
  );
}
