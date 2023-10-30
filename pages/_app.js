// `pages/_app.js`
import '../styles/globals.css';
import '../styles/globals.scss';
import Head from "next/head";
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'react-i18next';
import OpenGraph from '../components/theme/header/OpenGraph'

import i18n from '../src/i18n';


function App({ Component, pageProps }) {
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add('body');
        i18n.reloadResources();
    }, []);


    return (
        <>
            <Head>
                <title>Api -CEO </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* OpenGraph  */}
                <OpenGraph />

            </Head>

            <Component {...pageProps} />
        </>
    )

}

export default appWithTranslation(App);

