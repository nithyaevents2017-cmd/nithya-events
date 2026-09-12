import fs from "fs";

const content = fs.readFileSync(
  "C:\\Users\\kumar\\.gemini\\antigravity-ide\\brain\\06fe2713-e316-43c8-b3a6-5f9544b642ac\\.system_generated\\steps\\31\\content.md",
  "utf-8",
);

const regex = /https:\/\/lh3\.googleusercontent\.com\/[^"\'><\\s]+/g;
let matches = [...new Set(content.match(regex) || [])];

console.log(`Found ${matches.length} unique images.`);
fs.writeFileSync(
  "C:\\Users\\kumar\\.gemini\\antigravity-ide\\brain\\06fe2713-e316-43c8-b3a6-5f9544b642ac\\scratch\\extracted_images.json",
  JSON.stringify(matches, null, 2),
);

console.log("Saved to scratch/extracted_images.json");
