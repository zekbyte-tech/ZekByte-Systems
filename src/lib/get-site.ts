import { getEntry } from "astro:content";

const entry = await getEntry("site", "site");

export function getSite() {
    if (!entry)
        throw new Error("Missing required file 'src/content/site.yaml'.");

    return entry;
}
