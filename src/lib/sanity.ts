import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

// Setup the read-only client for fetching data
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "479tsopf",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true, // Use CDN for extremely fast caching (ideal for public gallery)
  apiVersion: "2024-03-01",
});

// Setup the image URL builder
const builder = createImageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export type SanityGalleryImage = {
  _id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  _createdAt: string;
};
