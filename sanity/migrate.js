import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup Sanity client for writing
const client = createClient({
  projectId: "5h74mgyt",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-01",
  // MUST PROVIDE A WRITE TOKEN IN YOUR TERMINAL ENVIRONMENT
  token: process.env.SANITY_AUTH_TOKEN,
});

async function migrateImages() {
  if (!process.env.SANITY_AUTH_TOKEN) {
    console.error("ERROR: You must set the SANITY_AUTH_TOKEN environment variable.");
    console.error("Example: $env:SANITY_AUTH_TOKEN='your_token'; node migrate.js");
    process.exit(1);
  }

  console.log("Starting image migration to Sanity...");

  // Images n1 to n9 in order
  const images = [
    "n1.jpg",
    "n2.jpg",
    "n3.jpg",
    "n4.jpg",
    "n5.jpg",
    "n6.jpg",
    "n7.jpg",
    "n8.jpg",
    "n9.jpg",
  ];

  for (const imgFile of images) {
    const filePath = join(__dirname, "../public/gallery", imgFile);

    try {
      console.log(`Uploading ${imgFile}...`);
      // 1. Upload the image asset
      const asset = await client.assets.upload("image", createReadStream(filePath), {
        filename: imgFile,
      });

      // 2. Create the galleryImage document referencing the asset
      const doc = {
        _type: "galleryImage",
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        },
      };

      const createdDoc = await client.create(doc);
      console.log(`Successfully published ${imgFile} to Sanity with ID: ${createdDoc._id}`);

      // Wait a bit to ensure _createdAt sorting matches exact upload sequence
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err) {
      console.error(`Failed to process ${imgFile}:`, err);
    }
  }

  console.log("Migration complete! All images are now in Sanity.");
}

migrateImages();
