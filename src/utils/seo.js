const DESCRIPTION =
    "Diffraction represents interaction and dissemination of ideas. It is using one voice to spread ideas to many others. Diffraction keeps us open-minded and open to new perspectives.";

export default {
    title: "TEDxCMU Diffraction",
    description: DESCRIPTION,
    canonical: "https://diffraction.tedxcmu.org",
    twitter: {
        cardType: "summary",
        site: "@tedxcmu",
        handle: "@tedxcmu",
    },
    openGraph: {
        url: "https://diffraction.tedxcmu.org",
        type: "website",
        title: "TEDxCMU Momentum",
        description: DESCRIPTION,
        images: [
            {
                url: "https://diffraction.tedxcmu.org/banner.png",
                alt: "TEDxCMU Diffraction Banner",
            },
        ],
        locale: "en_IE",
    },
    additionalMetaTags: [
        {
            name: "author",
            content: "TEDxCMU",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
    ],
};
