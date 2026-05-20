import { getEntry } from "astro:content";

const entry = await getEntry("about", "about");

if (!entry) {
    throw new Error("Missing required file 'src/content/about.md'.");
}

export default entry;
