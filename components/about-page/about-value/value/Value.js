import { getString } from '../../../../lib/richText';
import { breakpointsObj } from '../../../../lib/responsive';
import { useMatchMedia } from '../../../../lib/hooks';
import { P } from '../../../../style/typography';
import {
  ValueWrapper,
  ValueImage,
  ValueTextWrapper,
  ValueTitleWrapper,
  ValueDescriptionWrapper,
} from './Value.style';

export default function Value({ valueData, offset }) {
  const {
    value_title: title,
    value_description: description,
    value_image: image,
  } = valueData;

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <ValueWrapper offset={isTabletOrMobile ? null : offset}>
      <ValueImage src={image.url} alt={image.alt} />
      <ValueTextWrapper>
        <ValueTitleWrapper>{getString(title).toUpperCase()}</ValueTitleWrapper>
        <ValueDescriptionWrapper>
          <P>{getString(description)}</P>
        </ValueDescriptionWrapper>
      </ValueTextWrapper>
    </ValueWrapper>
  );
}
