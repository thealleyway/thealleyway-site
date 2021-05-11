import { SideImageStyled } from './SideImage.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';

export default function SideImage({ image }) {

    const placeHolderRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        registerObserver(placeHolderRef.current, setVisible);
    }, []);

    if (visible) {
        return (
            <SideImageStyled
                src={image.url}
                alt={image.alt}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 4, damping: 40, bounce: 0, delay: 1}}
            />
        )
    }
    return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}