import { getEntry } from "astro:content";

const site = await getEntry("site", "site");

if (!site) {
    throw new Error("Missing site configuration file 'src/content/site.yaml'.");
}

export default site;
