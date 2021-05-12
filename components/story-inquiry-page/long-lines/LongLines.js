import { icons } from '../../../style/icons';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import {
    LongLinesDesktop,
    LongLinesTablet
} from './LongLines.styles';

export default function LongLines() {

    const placeHolderRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        registerObserver(placeHolderRef.current, setVisible);
    }, []);

    if (visible) {
        return (
            <>
                <LongLinesDesktop
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 4, delay: 2 }}
                    src={icons.LONG_LINES_DESKTOP}
                    alt="long lines with spark at the end for desktop"
                />
                <LongLinesTablet
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 4 }}
                    src={icons.LONG_LINES_TABLET}
                    alt="long lines with spark at the end for tablet"
                />
            </>
        )
    }
    return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}