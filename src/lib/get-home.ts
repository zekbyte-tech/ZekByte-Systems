import { getEntry } from "astro:content";

export async function getHome() {
    return await getEntry("home", "home");
}
