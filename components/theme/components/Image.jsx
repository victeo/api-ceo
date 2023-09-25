import React from 'react';

/**
 * Settings are mandatory
 * info: It is the path (URL) to the image you want to display.
 * alt: It is the description of the image, used for accessibility.
 * url: This is the URL you want to direct to when the image is clicked.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Image(props) {
    return (<>
            <a href={props.url}>
                <img
                    src={props.info.src}
                    alt={props.alt}
                />
            </a>
        </>);
}
