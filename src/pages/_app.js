import Metadata from "components/metadata";

import "styles/fonts.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(
        <>
            <Metadata />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
