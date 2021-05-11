import { icons } from '../../../style/icons';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import {
    LongLinesDesktop,
    LongLinesFlippedDesktop,
    LongLinesTablet,
    LongLinesFlippedTablet,
    LongLinesContainer
} from './LongLines.styles';

export default function SideImage() {

    const placeHolderRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        registerObserver(placeHolderRef.current, setVisible);
    }, []);

    if (visible) {
        return (
            <LongLinesContainer
            >
                <LongLinesDesktop
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 4, delay: 2 }}
                    src={icons.LONG_LINES_DESKTOP}
                    alt="long lines with spark at the end for desktop"
                />
                <LongLinesFlippedDesktop
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 4, delay: 4 }}
                    src={icons.LONG_LINES_FLIPPED_DESKTOP}
                    alt="long lines with spark at the end flipped for desktop"
                />
                <LongLinesTablet
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 4 }}
                    src={icons.LONG_LINES_TABLET}
                    alt="long lines with spark at the end for tablet"
                />
                <LongLinesFlippedTablet
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 4 }}
                    src={icons.LONG_LINES_FLIPPED_TABLET}
                    alt="long lines with spark at the end flipped for tablet"
                />
            </LongLinesContainer>
        )
    }
    return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}