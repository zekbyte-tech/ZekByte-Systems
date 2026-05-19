import { getSite } from "../lib/get-site";

export async function buildWebsiteSchema() {
    const site = await getSite();

    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site?.data.title,
        url: site?.data.url,
    };
}

export async function buildPersonSchema() {
    const site = await getSite();

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: site?.data.author,
        url: site?.data.url,
    };
}

export async function buildBlogIndexSchema(page: {
    title: string;
    description: string;
}) {
    const site = await getSite();

    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${site?.data.url}/blog/#blog`,

        url: `${site?.data.url}/blog`,

        name: page.title,

        description: page.description,

        inLanguage: "en-US",

        publisher: {
            "@type": "Organization",

            name: site?.data.title,

            logo: {
                "@type": "ImageObject",
                url: `${site?.data.url}/logo.png`,
            },
        },
    };
}

export async function buildBlogPostSchema(post: {
    title: string;
    description: string;
    publishedTime: string;
    image: string;
    slug: string;
}) {
    const site = await getSite();

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        headline: post.title,
        description: post.description,

        image: [post.image],

        datePublished: post.publishedTime,

        author: {
            "@type": "Person",
            name: site?.data.author,
        },

        publisher: {
            "@type": "Organization",
            name: site?.data.title,
            logo: {
                "@type": "ImageObject",
                url: `${site?.data.url}/logo.png`,
            },
        },

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${site?.data.url}/blog/${post.slug}`,
        },
    };
}
