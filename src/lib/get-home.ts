import { getEntry } from "astro:content";

const entry = await getEntry("home", "home");

export function getHome() {
    if (!entry)
        throw new Error("Missing required file 'src/content/home.yaml'.");

    return entry;
}
