import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "NithyA EventS",

  projectId: "5h74mgyt",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
