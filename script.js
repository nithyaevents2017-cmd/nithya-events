const fs = require("fs");
const path = require("path");

const files = [
  "src/routes/__root.tsx",
  "src/routes/index.tsx",
  "src/routes/gallery.tsx",
  "src/components/FloatingContact.tsx",
  "sanity/sanity.config.ts",
];

files.forEach((f) => {
  const p = path.join(process.cwd(), f);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, "utf-8");
  let newContent = content.replace(/Nithya\s+Events/gi, "NithyA EventS");
  if (content !== newContent) {
    fs.writeFileSync(p, newContent, "utf-8");
    console.log("Updated " + f);
  }
});
