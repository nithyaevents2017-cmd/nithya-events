import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Setup the read-only client for fetching data
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "479tsopf",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true, // Use CDN for extremely fast caching (ideal for public gallery)
  apiVersion: "2024-03-01",
});

// Setup the image URL builder
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type SanityGalleryImage = {
  _id: string;
  image: any;
  _createdAt: string;
};
