import { getEntry } from "astro:content";

export async function getSite() {
    return await getEntry("site", "site");
}
