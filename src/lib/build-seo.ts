import { getSite } from "./get-site";

export type SEOProps = {
    title?: string;
    description?: string;
    image?: string;
    canonical?: string;
    noindex?: boolean;
};

export function buildSEO({
    title,
    description,
    image,
    canonical,
    noindex = false,
}: SEOProps) {
    const site = getSite();

    const seo = {
        title: title ? `${title} | ${site?.data.title}` : site?.data.title,

        description: description || site?.data.description,

        image: image
            ? new URL(image, site?.data.url).toString()
            : `${site?.data.url}/default-og.jpg`,

        canonical: canonical || site?.data.url,

        noindex,
    };

    return seo;
}
