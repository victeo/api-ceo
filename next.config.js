/** @type {import('next').NextConfig} */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig = {}

module.exports = nextConfig


const path = require('path');
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./components/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./api/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
});
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        // prependData: `@import "globals.scss";`,
    },
    experimental: {
        extraAttributes: ['cz-shortcut-listen'],
      },
};

const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n
}
  