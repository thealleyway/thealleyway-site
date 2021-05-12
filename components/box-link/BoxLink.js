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
import { useSpring } from 'react-spring';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../lib/intersectionObserver';
import { PlaceHolder } from '../base-components/BaseComponents';

export default function BoxLink({ boxLinkData }) {
  const {
    box_link_title: boxLinkTitle,
    box_link_description: boxLinkDescription,
    box_link_link: boxLinkLink,
  } = boxLinkData;

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <BoxLinkContainer
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 3, delay: 1 }}
      >
        <EllipseContainer>
          <Ellipse src={icons.DOUBLE_ELLIPSES} alt="White double ellipses" />
        </EllipseContainer>
        <InnerContentContainer>
          <Title>{getString(boxLinkTitle).toUpperCase()}</Title>
          <Description>{getString(boxLinkDescription)}</Description>
          <PageLink href={`/${boxLinkLink.uid}`}>
            <MediumArrowContainer
              onMouseEnter={() => set({ x: 100 })}
              onMouseLeave={() => set({ x: 0 })}
            >
              <MediumArrow
                src={icons.FILLED_MEDIUM_ARROW}
                alt="Filled mauve medium arrow"
                style={{ transform: x.to((v) => `translateX(${v}%`) }}
              />
            </MediumArrowContainer>
          </PageLink>
          <PageLink href={`/${boxLinkLink.uid}`}>
            <LongArrowContainer onTouchStart={() => set({ x: 40 })}>
              <LongArrow
                src={icons.FILLED_LONG_ARROW_MAUVE}
                alt="Filled mauve long arrow"
                style={{ transform: x.to((v) => `translateX(${v}%`) }}
              />
            </LongArrowContainer>
          </PageLink>
        </InnerContentContainer>
      </BoxLinkContainer>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
