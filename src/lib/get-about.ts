import { getEntry } from "astro:content";

const entry = await getEntry("about", "about");

export function getAbout() {
    if (!entry)
        throw new Error("Missing required file 'src/content/about.mdx'.");

    return entry;
}
