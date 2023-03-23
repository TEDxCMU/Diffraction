import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "utils/seo";

function Metadata() {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Head>
                <meta key="charset" charSet="UTF-8" />
                <link key="favicon" rel="icon" href="favicon.svg" />
                <link
                    key="apple-touch-icon"
                    rel="apple-touch-icon"
                    href="favicon.svg"
                />
            </Head>
        </>
    );
}

export default Metadata;
