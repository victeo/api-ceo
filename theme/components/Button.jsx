import React from 'react';
export default function Button(props) {
    return (
        <button
            style={{
                backgroundColor: props.backgroundColor,
                color: props.color ,
                padding: props.padding ,
                borderRadius: props.borderRadius,
                fontSize: props.fontSize,
                width: props.width,
                height: props.height,
                backgroundImage: props.img,
            }}
            className={props.classes}
        >
            {props.children}
            {props.text}
        </button>
    );
}
