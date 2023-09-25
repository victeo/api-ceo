import Head from "next/head";
import React from "react"
import styleGlobal from "../../../styles/globals.scss"

function CustomHead(props) {
    console.log(styleGlobal)
    return (
        <head>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href='../../../styles/globals.scss'
            />
            <title>{props.title}</title>
        </head>
    );
}

export default CustomHead;